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
  selector: 'app-card-patient-data',
  templateUrl: './card-patient-data.component.html',
  styleUrls: ['./card-patient-data.component.scss']
})





/* Component Class Holder */
export class CardPatientDataComponent implements OnInit {

    user: User;
    @Input('editCase') editCase: boolean;
    caseNumber: any;
    patientInfo: string[] = [];

    constructor(public dataService: CaseDataService) {

    this.user = this.dataService.getCase().user;
    this.patientInfo = this.dataService.getCase().patientInfo;
    this.caseNumber = this.dataService.getCase().caseNr;

    }
    userForm: FormGroup;
    ngOnInit() {
        this.userForm = new FormGroup({
            'patientName': new FormControl(this.patientInfo[0]),
            'patientSSN': new FormControl(this.patientInfo[1]),
            'patientComments': new FormControl(this.patientInfo[2])
        });
    };

    get patientName() {
        return this.userForm.get('patientName')
    }

    get patientSSN() {
        return this.userForm.get('patientSSN')
    }

    get patientComments() {
        return this.userForm.get('patientComments')
    }

    /**
    * return boolean which is true if all form values are valid or not
    * @returns boolean which is true if all form values are valid or not
    */
    isValid() {
    }

    somethingChanged() {
      this.dataService.getCase().patientInfo[0] = this.userForm.get('patientName').value;
      this.dataService.getCase().patientInfo[1] = this.userForm.get('patientSSN').value;
      this.dataService.getCase().patientInfo[2] = this.userForm.get('patientComments').value;
    }


    onSave($event){

}
}