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

  public isValid: boolean; 


  /**
    * sets boolean isValid to same value as child component card-form.component
    */
  public setValidity(isValid: boolean):void {
    this.isValid = isValid;
}

 
    ngOnInit() {
      this.isValid=false;
     };

}
