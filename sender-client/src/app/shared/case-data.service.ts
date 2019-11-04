/**
 * Service for storing local data 
 * @author Philip Kantola <phika529@student.liu.se>
 */

import { Injectable } from '@angular/core';
import { Case } from '../models/case';


@Injectable({
  providedIn: 'root'
})

export class CaseDataService {

  caseData: Case;

  mockCase() {
    this.caseData = { user: { name: "Enter name", email: "lol@hotmail.com", phone: "112" }, images: [], caseNr: 1234 }
  }

  constructor() {
    this.mockCase();
  }

  getCase() {
    return this.caseData;
  }


}


