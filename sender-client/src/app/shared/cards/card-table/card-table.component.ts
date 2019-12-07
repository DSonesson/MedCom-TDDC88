/**
 * Card Form
 * Card layout for a form
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';

import { CaseDataService } from '../../../shared/case-data.service';
import { User } from '../../../models/user';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { element } from 'protractor';

/**
 * This card lets the user fill out a form
 * about the patient
 */
@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})

export class CardTableComponent implements OnInit {

    user: User;
    checkboxes: Array<{question: string, storedValue: boolean, value: boolean, complementary?: string, complementaryFormData?: string[]}> = [];
    private card_content = `                    <div class="col-md-12 px-1">
                        
                        <div class="form-group editable card-table">
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

    saveButton1=false;
    dateOfArrival = new Date();
    timeofArrival: string[] = [];
    transportInfo: string;
    hourIncorrect: boolean;
    dateToday = new Date();

    /**
    * The constructor fetches the relevant data from CaseDataService and creates
    * a new FormGroup that is used to get values from input fields
    * @param CaseDataService is the CaseDataService that is used to fetch the Case Data
    */
    constructor(public dataService: CaseDataService) {

    this.user = this.dataService.getCase().user;

    this.checkboxes = this.dataService.getCase().patientForm;
    this.dateOfArrival = this.dataService.getCase().dateofArrival;
    this.timeofArrival = this.dataService.getCase().timeofArrival;
    this.transportInfo = this.dataService.getCase().transportInfo;

    }

    userForm: FormGroup;

    /**
    * Sets the forms for retrieving data
    */
    ngOnInit() {
        this.userForm = new FormGroup({
            'patientComments': new FormControl(this.transportInfo),
            'hourArrival': new FormControl(this.timeofArrival[0]),
            'minArrival': new FormControl(this.timeofArrival[1])
        });
    }

    /**
    * Saves the clicked on checkbox value to the Case and disables the one next to it if it is checked
    * @param checkboxId Id of the clicked checkbox.
    * @param setBoolean An input parameter deciding what boolean value to be saved to the case.
    * @param event An event to check if the clicked checkbox is true or false to know whether to store the value or not
    */
    setCheckboxes(checkboxId: number, setBoolean: boolean, event: any) {
        this.checkboxes[checkboxId].value = setBoolean;
        this.checkboxes[checkboxId].storedValue = false;
        this.dataService.getCase().patientForm = this.checkboxes;
        if (event.target.checked) {
            this.checkboxes[checkboxId].storedValue = true;
        }
    }

        /**
    * A method to save the input field values that some questions have
    * @param i index of the question that the input belongs to.
    * @param event input field value
    * @param indexOfcomplementaryFormData A number used to store the input field value to the right place if the question
    * has several input fields
    */
    checkBoxFormsChanged(i: number, event: any, indexOfcomplementaryFormData: number) {

        console.log(i + " -- " + indexOfcomplementaryFormData + " -- " + event.target.value);
        this.checkboxes[i].complementaryFormData[indexOfcomplementaryFormData] = event.target.value;
        this.dataService.getCase().patientForm = this.checkboxes;
      }

    /**
    * A method to save the input field values of the inputs below the form (except the date, which is saved using dateChange)
    */
      textFormChanged() {
        this.dataService.getCase().transportInfo = this.userForm.get('patientComments').value;
        this.dataService.getCase().timeofArrival[0] = this.userForm.get('hourArrival').value;
        this.dataService.getCase().timeofArrival[1] = this.userForm.get('minArrival').value;

        let timePicker = document.getElementsByClassName('timePicker') as HTMLCollectionOf<HTMLElement>;

        if (this.userForm.get('hourArrival').value != null && this.userForm.get('hourArrival').value > 1 ||
        this.userForm.get('minArrival').value != null && this.userForm.get('minArrival').value > 1) {

          if (this.userForm.get('hourArrival').value < 24 && this.userForm.get('hourArrival').value >= 0 && 
          this.userForm.get('minArrival').value < 60 && this.userForm.get('minArrival').value >= 0) {
          this.dateOfArrival.setHours(this.userForm.get('hourArrival').value);
          this.dateOfArrival.setMinutes(this.userForm.get('minArrival').value);

          this.hourIncorrect = false;

          if (timePicker.length != 0) {
            timePicker[0].style.borderBottom = "1px solid #2AD753";
          }
          }
          else {
            if (timePicker.length != 0) {
              timePicker[0].style.borderBottom = "1px solid red";
              this.hourIncorrect = true;
            }
          }
        }
    }

    /**
     * Add a 0 before the time entered if the time is below 10 to get a correct time format
     * @param setHours Checks if hours or minutes should be set
     */
    addZeroBeforeInput(setHours: boolean) {
      if (setHours) {
        if (this.userForm.get('hourArrival').value < 10) {
          this.timeofArrival[0] = "0" + parseInt(this.timeofArrival[0]);
        }
      }
      else {
        if (this.userForm.get('minArrival').value < 10) {
          this.timeofArrival[1] = "0" + parseInt(this.timeofArrival[1]);
        } 
      }
    }
    /**
    * A method to save the date when changed
    * @param event The date value
    */
      dateChange(event: any){
        this.dateOfArrival = event.target.value;
        this.dataService.getCase().dateofArrival = event.target.value;
        this.dataService.getCase().hasSavedDate = true;
      }

}




