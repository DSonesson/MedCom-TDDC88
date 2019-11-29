/**
 * Card Form
 * Card layout for a form
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { CaseDataService } from '../../../shared/case-data.service';
import { User } from '../../../models/user';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpService } from 'app/shared/http.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})





/* Component Class Holder */
export class CardFormComponent implements OnInit {

    user: User;
    @Input() isSummary: boolean;
    @Input('editCase') editCase: boolean;
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
  private nameChanged: boolean;
  private emailChanged: boolean;
  private phoneChanged: boolean;

  /**
   * The title and description of the card 
   */
  @Input ("title") title: String;
  @Input ("description") description: String;


    constructor(public dataService: CaseDataService, public httpService : HttpService) {


    this.user = this.dataService.getCase().user;
    this.caseNumber = this.dataService.getCase().caseNr;
  }

  phoneExp = new RegExp(
    "^(010 | 011 | 0120 | 0121 | 0122 | 0123 | 0125 | 013 | 0140 | 0141 | 0142 | 0143 | 0144 | 0150 | 0151 | 0152 | 0155 | 0156 | 0157 | 0158 | 0159 | 016 | 0171 | 0173 | 0174 | 0175 | 0176 | 018 | 019 | 020 | 021 | 0220 | 0221 | 0222 | 0223 | 0224 | 0225 | 0226 | 0227 | 023 | 0240 | 0241 | 0243 | 0246 | 0247 | 0248 | 0250 | 0251 | 0253 | 0258 | 026 | 0270 | 0271 | 0278 | 0280 | 0281 | 0290 | 0291 | 0292 | 0293 | 0294 | 0295 | 0297 | 0300 | 0301 | 0302 | 0303 | 0304 | 031 | 0320 | 0321 | 0322 | 0325 | 033 | 0340 | 0345 | 0346 | 035 | 036 | 0370 | 0371 | 0372 | 0380 | 0381 | 0382 | 0383 | 0390 | 0392 | 0393 | 040 | 0410 | 0411 | 0413 | 0414 | 0415 | 0416 | 0417 | 0418 | 042 | 0430 | 0431 | 0433 | 0435 | 044 | 0451 | 0454 | 0455 | 0456 | 0457 | 0459 | 046 | 0470 | 0471 | 0472 | 0474 | 0476 | 0477 | 0478 | 0479 | 0480 | 0481 | 0485 | 0486 | 0490 | 0491 | 0492 | 0493 | 0494 | 0495 | 0496 | 0498 | 0499 | 0500 | 0501 | 0502 | 0503 | 0504 | 0505 | 0506 | 0510 | 0511 | 0512 | 0513 | 0514 | 0515 | 0520 | 0521 | 0522 | 0523 | 0524 | 0525 | 0526 | 0528 | 0530 | 0531 | 0532 | 0533 | 0534 | 054 | 0550 | 0551 | 0552 | 0553 | 0554 | 0555 | 0560 | 0563 | 0564 | 0565 | 0570 | 0571 | 0573 | 0580 | 0581 | 0582 | 0583 | 0584 | 0585 | 0586 | 0587 | 0589 | 0590 | 0591 | 060 | 0611 | 0612 | 0613 | 0620 | 0621 | 0622 | 0623 | 0624 | 063 | 0640 | 0642 | 0643 | 0644 | 0645 | 0647 | 0650 | 0651 | 0652 | 0653 | 0657 | 0660 | 0661 | 0662 | 0663 | 0670 | 0671 | 0672 | 0680 | 0682 | 0684 | 0687 | 0690 | 0691 | 0692 | 0693 | 0695 | 0696 | 070 | 0710 | 0719 | 74 | 075 | 771 | 078 | 79 | 08 | 0900 | 090 | 0910 | 0911 | 0912 | 0913 | 0914 | 0915 | 0916 | 0918 | 0920 | 0921 | 0922 | 0923 | 0924 | 0925 | 0926 | 0927 | 0928 | 0929 | 0930 | 0932 | 0933 | 0934 | 0935 | 0940 | 0941 | 0942 | 0943 | 0950 | 0951 | 0952 | 0953 | 0954 | 0960 | 0961 | 0970 | 0971 | 0973 | 0975 | 0976 | 0977 | 0978 | 0980 | 0981 | 072 | 073 | 076 | 079 | 077 | 0939 | 0944 | 099 |)[0-9]{4,8}"
  );
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
        Validators.email
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