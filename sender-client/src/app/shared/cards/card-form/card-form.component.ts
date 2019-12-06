/**
 * Card Form
 * Card layout for a form
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import { CaseDataService } from "../../../shared/case-data.service";
import { User } from "../../../models/user";

import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  FormControl,
  Validators,
  FormGroup,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
import { HttpService } from "app/shared/http.service";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"]
})

/* Component Class Holder */
export class CardFormComponent implements OnInit {
  user: User;
  @Input() isSummary: boolean;
  @Input("editCase") editCase: boolean;
  @Output() onSaveForm = new EventEmitter<boolean>();
  caseNumber: any;
  @Output() displayForm = new EventEmitter<boolean>();

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

  saveButton1 = false;
  nameChanged: boolean;
  private emailChanged: boolean;
  private phoneChanged: boolean;

  /**
   * The title and description of the card
   */
  @Input("title") title: String;
  @Input("description") description: String;

  constructor(
    public dataService: CaseDataService,
    public httpService: HttpService
  ) {
    this.user = this.dataService.getCase().user;
    this.caseNumber = this.dataService.getCase().caseNr;
  }

  phoneExp = new RegExp("(\+46[0-9]{10})|^([0-9]{10})");
  // phoneExp = new RegExp('^(([+]\d{2}[ ][1-9]\d{0,2}[ ])|([0]\d{1,3}[-]))((\d{2}([ ]\d{2}){2})|(\d{3}([ ]\d{3})*([ ]\d{2})+))$')
  userForm: FormGroup;
  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
        Validators.pattern(/.+@.+\..+/)
      ]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
        phoneValidator(this.phoneExp)
      ])
    });
  }

  /**
   * Emits a boolean to summary page for summary page to know which component to display.
   *
   */
  setDisplayForm() {
    this.displayForm.emit(false);
  }

  setInputFieldChanged(e) {
    let change: boolean;
    if (e.target.value) {
      change = true;
    } else {
      change = false;
    }

    switch (e.target.id) {
      case "name":
        this.nameChanged = change;
        break;

      case "email":
        this.emailChanged = change;
        break;

      case "phone":
        this.phoneChanged = change;
        break;

      default:
        break;
    }
  }

  get name() {
    return this.userForm.get("name");
  }

  get email() {
    return this.userForm.get("email");
  }

  get phone() {
    return this.userForm.get("phone");
  }

  /**
   * return boolean which is true if all form values are valid or not
   * @returns boolean which is true if all form values are valid or not
   */
  isValid() {
    if (this.userForm.status == "VALID") {
      return true;
    }
    return false;
  }

  somethingChanged() {
    this.onSaveForm.emit(this.isValid());
  }

  onSave($event) {
    //   this.dataService.getCase().user = this.user;
  }
}

export function phoneValidator(phone: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const pass = phone.test(control.value);
    return pass ? null : { phoneError: { value: control.value } };
  };
}
