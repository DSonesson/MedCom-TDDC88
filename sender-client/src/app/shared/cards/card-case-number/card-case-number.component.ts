/**
 * Card Form
 * Card layout for a form
 * @version 1.0
 * @author Albin Lindén <albli248@student.liu.se>
 */

/* Imports */
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { CaseDataService } from '../../../shared/case-data.service';
import { User } from '../../../models/user';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-card-case-number',
  templateUrl: './card-case-number.component.html',
  styleUrls: ['./card-case-number.component.scss']
})





/* Component Class Holder */
export class CardCaseNumber implements OnInit {

    user: User;
    @Input('editCase') editCase: boolean;
    caseNumber: any;

    constructor(public dataService: CaseDataService) {

    this.user = this.dataService.getCase().user;
    this.caseNumber = this.dataService.getCase().caseNr;

    }
    ngOnInit() {
    };

    /**
    * return boolean which is true if all form values are valid or not
    * @returns boolean which is true if all form values are valid or not
    */
    isValid() {
    }



    onSave($event){

}
}
