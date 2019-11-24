/**
 * Summary Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'app/shared/upload.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private uploadService: UploadService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer
    ) {
      this.matIconRegistry.addSvgIcon(
        "edit",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/edit.svg")
      );
     }

  startUpload() {
    this.uploadService.startUpload();
  }

 // are form values valid
 public isValid: boolean; 
 // is image uploaded locally
 public isUploaded: boolean; 

 public DisplayForm: boolean;


 /**
   * sets boolean isValid to same value as in child component card-form.component
   */
 public setValidity(isValid: boolean): void {
  console.log("HÄNDER 1");
  
  this.isValid = isValid;
 }
public setDisplayForm(displayForm: boolean): void {
  console.log("händer 3");
  console.log(displayForm);
  this.DisplayForm = displayForm;
}

 /**
   * sets boolean isUploaded to same value as in child component card-image.component
   */
 public setUploadBoolean(isUploaded: boolean): void {
  console.log("Händer 2") ;
  console.log(isUploaded);
  if (this.isValid) {
     this.isUploaded = isUploaded;
   }
 }


   ngOnInit() {
     this.isValid=false;
     this.isUploaded=false;
     this.DisplayForm= false;
    };

}
