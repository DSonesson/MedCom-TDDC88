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


  constructor() {
        this.caseData = new Case();
       
  }

  getCase() {
    return this.caseData;
  }


}


