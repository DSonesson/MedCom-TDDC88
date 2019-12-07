/**
 * Summary Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit, NgZone } from "@angular/core";
import { UploadService } from "app/shared/upload.service";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog } from "@angular/material";
import { PopupComponent } from "app/shared/cards/popup/popup.component";
import { CaseDataService } from "app/shared/case-data.service";
import { AuthAssistantService } from "app/shared/auth-assistant.service";
import { Router } from "@angular/router";
import { AutMethodPopupComponent } from 'app/shared/cards/aut-method-popup/aut-method-popup.component';

/**
 * This component shows the data the
 * user has specified and let the user
 * edit, submit or cancel the case.
 */
@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
  
  /** The text attributes for the cards */
  private pageHeader: String;
  private formTitle: String;
  private formDescription: String;
  private imageCardTitle: String;
  private imageCardDescription: String;
  private loadingAuth: Boolean;

  /** The one time password the user submits */
  private otp;

/**
 * 
 * @param uploadService 
 * @param dialog For the cancel popup window  
 * @param dataService 
 * @param matIconRegistry 
 * @param domSanitizer 
 * @param authService 
 * @param ngZone 
 * @param router 
 * @param dialogMethod For the authentication popup window 
 */
  constructor(
    private uploadService: UploadService,
    private dialog: MatDialog,
    public dataService: CaseDataService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public authService: AuthAssistantService,
    private ngZone: NgZone,
    private router: Router,
    private dialogMethod: MatDialog 
  ) {
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

  /** are form values valid */
  public isValid: boolean;
  /** is image uploaded locally */
  public isUploaded: boolean;
  /** boolean for deciding which card form to show. */
  public displayForm: boolean;

  /**
   * sets boolean isValid to same value as in child component card-form.component
   * @param {boolean} isValid 
   */
  public setValidity(isValid: boolean): void {
    this.isValid = isValid;
  }

  /**
   * sets boolean displayForm to same value as in child component from either card-form.component
   * or card-default.component.
   * @param {boolean} displayForm 
   */
  public setDisplayForm(displayForm: boolean): void {
    this.displayForm = displayForm;
  }

  /**
   * sets boolean isUploaded to same value as in child component card-image.component
   * @param {boolean} isUploaded 
   */
  public setUploadBoolean(isUploaded: boolean): void {
    this.isUploaded = isUploaded;
  }

  /**
   * When the user presses the cancel button a popup
   * appears which lets the user cancel the case.
   */
  openDialog() {
    let dialogRef = this.dialog.open(PopupComponent, {
      data: {
        content: "Är du säker på att du vill avsluta ditt ärende?",
        yesBtn: "Ja, avsluta",
        noBtn: "Nej"
      },
      width: "500px",
      height: "250px"
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
   * When the user presses the submit button a popup
   * appears which lets the user choose authentication method.
   */
  openMethodDialog() {
    let dialogRefM = this.dialogMethod.open(AutMethodPopupComponent, {
      width: "500px",
      height: "500px"
    });

    dialogRefM.afterClosed().subscribe(result => {
      //console.log("Dialog result: " + result);
      if (result === false) {
        console.log("Method BankID");
        this.startUpload();
      } else if (result != undefined) {
        console.log("Method code " + result);
        this.otp = result;
        //TODO call the code api!
        //this.router.navigate(["/confirmation"]);
      }
    });
  }

  /**
   * Set isValid and isUploaded to true since it
   * must be for the user to acess this page.
   * Sets the text attributes.
   */
  ngOnInit() {
    this.isValid = true;
    this.isUploaded = true;
    this.displayForm = false;
    this.pageHeader = "Ärendesummering";

    this.formTitle = "Kontrollera dina uppgifter";
    this.formDescription = "Kontrollera att din ifyllda information stämmer.";
    this.imageCardTitle = "Dina bilder";
    this.imageCardDescription =
      "Kontrollera att det här är bilderna du vill skicka. Klicka på “Skicka ärende” när du är klar.";
  }
}
