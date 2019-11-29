import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetchcase',
  templateUrl: './fetchcase.component.html',
  styleUrls: ['./fetchcase.component.scss']
})
export class FetchcaseComponent implements OnInit {
  private pageHeader: String;
  
  /**
  * The text attributes for the card
  */
  private title: String;
  private description: String;
  
  constructor() {}

  ngOnInit() {
    this.pageHeader = "Ärendehantering";
    this.title = "Hämta ditt ärende";
    this.description ="Här kan du hämta information om ett ärende du tidigare skickat in, genom att skriva in ditt ärendenummer och klicka på “Hämta”.";
  }

}
