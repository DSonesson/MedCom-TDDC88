/**
 * Service for storing local data 
 * @author Philip Kantola <phika529@student.liu.se>
 */

import { Injectable } from '@angular/core';
import { Case } from '../models/case';

/**
 * Service for storing and sharing 
 * case data between components
 */
@Injectable({
  providedIn: 'root'
})

export class CaseDataService {

  /** The case data*/
  caseData: Case;

  /**
   * Creates a instance of CaseDataService
   * and sets caseData to new Case
   */
  constructor() {
        this.caseData = new Case();    
  }

  /**
  * Gets the current data for the case
  * @returns The case data
  */
  getCase() {
    return this.caseData;
  }
 
  /**
 * Method that will be used to clear images.
 */

  private removeImages: () => void;

  /**
 * method for fetching and setting the clear images method from card-image
 * to removeImages
 */

getMethod(fn: () => void) {

  this.removeImages = fn;

}


  /**
   * Overwrites the data the user has specified
   * in front and summary page 
   */
  clearUserData(){
    this.caseData.user.name = "";
    this.caseData.user.email = "";
    this.caseData.user.phone = "";
    this.removeImages();
    

    
  }

  clearPatientFormData() {
    this.caseData.dateofArrival = undefined;
    this.caseData.hasSavedDate = false;
    this.caseData.patientForm = [
      {question: "Har patienten en kroppstemperatur > 36° C?", storedValue: false, value: false},
      {question: "Är areriellt pO2 > 10 kPa?", storedValue: false, value: false}, 
      {question: "Är systoliskt blodtryck > 90 mm HG?", storedValue: false, value: false}, 
      {question: "Har traumaröntgen eller andra undersökningar gjorts?", storedValue: false, value: false},
      {question: "Är prover tagna för etanol eller annan toxikologi?", storedValue: false, value: false},
      {question: "Är patienten vid medvetande?", storedValue: false, value: false},
      {question: "Om patienten är eller har varit medvetslös - har analys av COHb gjorts?", storedValue: false, value: false},
      {question: "Är patienten intuberad?", storedValue: false, value: false},
      {question: "Vilka läkemedel är pågående?", storedValue: false, value: false, noCheckBoxes: true, complementary: "formAnswer", complementaryFormData: ["", ""], ymlFormat: ["Läkemedel: ", ""]},
      {question: "Pågår vätskebehandling enligt Parklands formel?", storedValue: false, value: false},
      {question: "Finns uppgift på vikt och längd?", storedValue: false, value: false, complementary: "formHeightWeight", complementaryFormData: ["", "", "", ""], ymlFormat: ["Längd: ", " cm: Vikt: ", "", " kg"]},
      {question: "Hur mycket vätska har infunderats innan avfärd?", storedValue: false, value: false, noCheckBoxes: true, complementary: "formAnswer", complementaryFormData: ["", ""], ymlFormat: ["Mängd: ", ""]},
      {question: "Hur stor totaldiures har patient haft till ", storedValue: false, value: false, noCheckBoxes: true, complementary: "totaldiuresForm", complementaryFormData: ["", "", "", ""], ymlFormat: ["klockan: ", "? Volym: ", "", " ml"]},
      {question: "Har patienten fått Tetanusvaccination?", storedValue: false, value: false},
      {question: "Är patienten bandaderad med salvkompressförband (t.ex Jelonet) eller torra, rena kompresser?", storedValue: false, value: false},
      {question: "Har brännskadade händer och huvud högläge?", storedValue: false, value: false},
      {question: "Har eskarotomi gjorts vid cirkulära skador efter samverkan med brännskadejour?", storedValue: false, value: false},
      {question: "Är köldskador polstrade?", storedValue: false, value: false}
  ];
  this.caseData.transportInfo = "";
  this.caseData.timeofArrival = ["", ""];
    }

}


