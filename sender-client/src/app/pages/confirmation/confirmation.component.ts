/**
 * Confirmation Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from "@angular/core";
import { CaseDataService } from "app/shared/case-data.service";

/**
 * This component displays a confirmation
 * that the case has been sent.
 */
@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.scss"]
})
export class ConfirmationComponent implements OnInit {

  /**
   * @param {CaseDataService} dataService 
   */
  constructor(public dataService: CaseDataService) {}

  /**
   * The text attributes for the card
   */
  pageHeader: String;
  private formTitle: String;
  private formDescription: String;
  private importantContent: String;
  private content: String;

  /**
   * Clear the user data.
   */
  clearData() {
    this.dataService.clearUserData();
  }

  /**
   * Sets the text attributes.
   */
  ngOnInit() {
    this.pageHeader = "Ärendebekräftelse";
    this.formTitle = "Ditt ärende har skickats!";
<<<<<<< HEAD
    this.formDescription =
      "Brännskadejouren har nu tagit emot ditt ärende. Om du vill lägga till information till ärendet, klicka på “Komplettera ärende”.";
    this.importantContent = "Kom ihåg att spara ditt ärendenummer!";
=======
    this.formDescription = "Brännskadejouren har nu tagit emot ditt ärende. Om du vill lägga till information till ärendet, klicka på “Komplettera ärende”.";
    this.importantContent = "Viktigt: Kom ihåg att spara ditt ärendenummer!";
>>>>>>> front-end
    this.content = "Det behövs för att kunna se ditt ärende senare.";
  }
}
