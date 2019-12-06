import { Component, OnInit } from '@angular/core';

/**
 * This component let the user add
 * patient information, to send in.
 */
@Component({
  selector: 'app-fetchcase',
  templateUrl: './fetchcase.component.html',
  styleUrls: ['./fetchcase.component.scss']
})
export class FetchcaseComponent implements OnInit {
  
  /**
  * The text attributes for the card
  */
  private title: String;
  private description: String;
  private pageHeader: String;

  
  constructor() {
  }

 /**
  * Sets the text attributes
  */
  ngOnInit() {
    this.pageHeader = "Ärendehantering";
    this.title = "Hämta ditt ärende";
    this.description ="Här kan du hämta information om ett ärende du tidigare skickat in, genom att skriva in ditt ärendenummer och klicka på “Hämta”.";
  }

}
