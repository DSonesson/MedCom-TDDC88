/**
 * Frontpage Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';

import { Routes } from '@angular/router';


@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})


export class FrontpageComponent implements OnInit {

  // are form values valid
  public isValid: boolean; 
  // is image uploaded locally
  public isUploaded: boolean; 



  /**
    * sets boolean isValid to same value as in child component card-form.component
    */
  public setValidity(isValid: boolean): void {
    this.isValid = isValid;
  }

  /**
    * sets boolean isUploaded to same value as in child component card-image.component
    */
  public setUploadBoolean(isUploaded: boolean): void {
    console.log("test");
    if (this.isValid) {
      this.isUploaded = isUploaded;
    }
  }

 
    ngOnInit() {
      this.isValid=false;
      this.isUploaded=false;

     };

}
