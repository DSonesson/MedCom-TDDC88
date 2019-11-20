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
 
}


