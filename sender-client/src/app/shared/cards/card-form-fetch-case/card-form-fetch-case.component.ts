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
    case: Case;
    enteredCaseNr : string;
    @Input('editCase') editCase: boolean;
    @Output() onSaveForm = new EventEmitter<boolean>();

    private card_content = `                    <div class="col-md-12 px-1">
                        
                        <div class="form-group editable card-form">
                            <label>Namn</label>
                            <p [hidden]="saveButton1">{{user.name}}</p>
                            <input [hidden]="!saveButton1" type="text" class="form-control" placeholder="Ditt namn" [(ngModel)]="user.name" value="{{user.name}}">
                            <label>Email</label>
                            <p [hidden]="saveButton1">{{user.email}}</p>
                            <input [hidden]="!saveButton1" type="text" class="form-control" placeholder="Email" [(ngModel)]="user.email" value="{{user.email}}">
                            <label>Telefon</label>
                            <p [hidden]="saveButton1">{{user.phone}}</p>
                            <input [hidden]="!saveButton1" type="text" class="form-control" placeholder="Telefon" [(ngModel)]="user.phone" value="{{user.phone}}">
                         
                        </div>

                    </div>`;

    saveButton1=true;
    caseNumber: string;

    constructor(public dataService: CaseDataService, private httpService: HttpService) {
        this.case = this.dataService.getCase();
        this.caseNumber = this.dataService.getCase().caseNr;
    }

    
    caseNrForm: FormGroup;
    ngOnInit() {
        this.caseNrForm = new FormGroup({
            'case': new FormControl(this.case.caseNr, [Validators.required, this.doesExist(this.enteredCaseNr)]),
        });
    };
    

    /*
    isValid() {
        if (this.caseNrForm.status == "VALID") {
            return true;
        } return false;
    }
*/
    isValid() {
        if (this.httpService.doSearch(this.enteredCaseNr, "/annro873")) {
            console.log("found casenr");
            return true;
        } return false;
    }

    setCaseNr() { 
        console.log("Entered number is " + this.enteredCaseNr);
        if(this.isValid()){
            console.log("isValid");
            this.caseNumber = this.enteredCaseNr;
        }
        //this.onSaveForm.emit(this.isValid());
    }
    
    
    doesExist(caseNr: string) : ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            if (this.httpService.doSearch(this.enteredCaseNr, "/annro873")) {
                return {"doesExist": true};
            }
            return null;    
        }
    }
}




