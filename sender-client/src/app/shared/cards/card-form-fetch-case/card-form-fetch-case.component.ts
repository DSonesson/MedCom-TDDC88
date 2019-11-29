/**
 * Card Form
 * Card layout for a form
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { CaseDataService } from '../../../shared/case-data.service';
import { User } from '../../../models/user';
import { Case } from '../../../models/case';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-card-form-fetch-case',
  templateUrl: './card-form-fetch-case.component.html',
  styleUrls: ['./card-form-fetch-case.component.scss']
})



/* Component Class Holder */
export class CardFormFetchCaseComponent implements OnInit {
    enteredCaseNr : string;
    caseNumber: string;

    constructor(public dataService: CaseDataService, private httpService: HttpService, private router: Router) {
        this.caseNumber = this.dataService.getCase().caseNr;

    }

    ngOnInit() {
    };

    /**
   * Checks if entered case number exists with help of dosearch.
   * If so set sets case number to the entered case number and call redirect.
   * Else gives alert that case doesn't exist.
   * @param enteredCaseNr Case number the user enters.
   * @param caseNummber Case number of this case
   * 
   * @returns Nothing is returned.
   */
    async setCaseNr() { 
        if(await this.httpService.doSearch(this.enteredCaseNr, "/annro873") == true) {
            console.log("Valid Casenum");
            this.caseNumber = this.enteredCaseNr;
            this.redirect();
        }
        else {
            alert("Finns inte");
        }
    }
    
    
    async doesExist(caseNr: string) : Promise<boolean> {
        let result = await this.httpService.doSearch(this.enteredCaseNr, "/annro873");
        return result;
    }

    redirect() {
        this.router.navigate(['/edit']);
    }
}
