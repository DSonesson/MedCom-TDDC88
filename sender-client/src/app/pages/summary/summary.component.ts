/**
 * Summary Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit, NgZone } from '@angular/core';
import { UploadService } from 'app/shared/upload.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog } from '@angular/material';
import { PopupComponent } from 'app/shared/cards/popup/popup.component';
import { CaseDataService } from 'app/shared/case-data.service';
import { AuthAssistantService} from 'app/shared/auth-assistant.service';
import { Router } from '@angular/router';


/**
 * This component shows the data the
 * user has specified and let the user
 * edit, submit or cancel the case.
 */
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  private pageHeader: String;
  /**
  * The text attributes for the cards
  */
  private formTitle: String;
  private formDescription: String;
  private imageCardTitle: String;
  private imageCardDescription: String;
  private loadingAuth: Boolean;

/**
   * @param uploadService
   * @param dialog
   * @param dataService
   * @param MatIconRegistry
   * @param domSanitizer
   */
  constructor(private uploadService: UploadService, private dialog: MatDialog,
              public dataService: CaseDataService, private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer, public authService: AuthAssistantService,
              private ngZone: NgZone,  private router: Router)

    {
        this.loadingAuth = false;
        this.matIconRegistry.addSvgIcon(
          "edit",
          this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/edit.svg")
        );
     }



  startUpload() {
    this.loadingAuth = true;
    if (this.authService.getAssistant().isAuthenticated()) {
      this.ngZone.run( () => {
        console.log("Authentication complete, starting upload. Token: ", this.authService.getAssistant().getAuthHeader())
        this.uploadService.startUpload(this.authService.getAssistant().getAuthHeader());
        console.log("start upload complete.")
      })
    } else {
      this.authService.getAssistant().login().then( () => {
        this.ngZone.run( () => {
          console.log("Authentication complete, starting upload. Token: ", this.authService.getAssistant().getAuthHeader())
          this.uploadService.startUpload(this.authService.getAssistant().getAuthHeader());
          console.log("start upload complete.")
        })
      })
    }

/*
    loginIfRequired().then( () => {
        this.ngZone.run( () => {
          console.log("Authentication complete, starting upload. Token: ", this.authService.getAssistant().getAuthHeader())
          this.uploadService.startUpload(this.authService.getAssistant().getAuthHeader());
          console.log("start upload complete.")
        })
      }).fail( (error) => {
        console.log("ERROR: ", error)});
  */
  }


 // are form values valid
 public isValid: boolean;
 // is image uploaded locally
 public isUploaded: boolean;
// boolean for deciding which card form to show.
 public displayForm: boolean;



 /**
   * sets boolean isValid to same value as in child component card-form.component
   */
 public setValidity(isValid: boolean): void {
  this.isValid = isValid;
}

 /**
   * sets boolean displayForm to same value as in child component from either card-form.component
   * or card-default.component.
   */
public setDisplayForm(displayForm: boolean): void {
  this.displayForm = displayForm;
}

 /**
   * sets boolean isUploaded to same value as in child component card-image.component
   */
 public setUploadBoolean(isUploaded: boolean): void {
     this.isUploaded = isUploaded;
 }

 /**
  * When the user presses the cancel button a popup
  * appears with the information defined in data.
  */
  openDialog() {
    let dialogRef = this.dialog.open(PopupComponent, {
      data:{ content: "Är du säker på att du vill avsluta ditt ärende?", yesBtn: "Ja, avsluta", noBtn: "Nej" },
      width: "500px",
      height: "250px",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result: " + result);
      if (result) {
        this.dataService.clearUserData();
        this.router.navigate(["/frontpage"]);
      }
    });
  }


  /**
   * Set isValid and isUploaded to true since it
   * must be for the user to acess this page
   */
  ngOnInit() {
    this.isValid = true;
    this.isUploaded = true;
    this.displayForm = false;
    this.pageHeader = "Summering av ditt ärende";

    this.formTitle = "Kontrollera dina uppgifter";
    this.formDescription = "Kontrollera att din ifyllda information stämmer.";
    this.imageCardTitle = "Dina bilder";
    this.imageCardDescription = "Kontrollera att det här är bilderna du vill skicka. Klicka på “Skicka ärende” när du är klar.";
  }
}
