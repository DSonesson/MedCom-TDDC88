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
import { Routes } from '@angular/router';

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
    Routes: any;

    constructor(public dataService: CaseDataService, private httpService: HttpService) {
        this.caseNumber = this.dataService.getCase().caseNr;
    }

    ngOnInit() {
    };

    async setCaseNr() { 
        console.log("Entered number is " + this.enteredCaseNr);
        console.log("return of doSearch " + this.httpService.doSearch(this.enteredCaseNr, "/annro873"));
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
        console.log("routing");
        this.Routes.navigate(['/edit']);
    }
}
