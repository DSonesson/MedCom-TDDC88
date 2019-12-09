/**
 * Card Form
 * Card layout for a form
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit, Output, Input, EventEmitter, NgZone } from '@angular/core';

import { CaseDataService } from '../../../shared/case-data.service';
import { User } from '../../../models/user';
import { Case } from '../../../models/case';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { AuthAssistantService} from 'app/shared/auth-assistant.service';


import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

/**
 * This card lets the user search for a case
 */
@Component({
  selector: 'app-card-form-fetch-case',
  templateUrl: './card-form-fetch-case.component.html',
  styleUrls: ['./card-form-fetch-case.component.scss']
})



/* Component Class Holder */
export class CardFormFetchCaseComponent implements OnInit {
    enteredCaseNr : string;
    caseNumber: string;

    @Input ("description") description;
    @Input ("title") title;
    @Output() fetchEvent = new EventEmitter<Boolean>();


    constructor(public dataService: CaseDataService,
                private httpService: HttpService,
                private router: Router,
                private authService: AuthAssistantService,
                private ngZone: NgZone) {

    }

    ngOnInit() {
    };

    async setCaseNr() {
      this.fetchEvent.next(true);
      this.authService.getAssistant().loginIfRequired().then( () => {
          this.ngZone.run( () => {
            this.search();
          })
        })
    }

  /**
   * Checks if entered case number exists with help of dosearch.
   * If so set sets case number to the entered case number and call redirect.
   * Else gives alert that case doesn't exist.
   */
    async search() {
      if(await this.httpService.doSearch(this.enteredCaseNr, this.authService.getAssistant().getAuthHeader()) == true) {
          console.log("Valid Casenum");
          this.dataService.getCase().caseNr = this.enteredCaseNr;
          this.redirect();
      }else {
          alert("Finns inte");
      }
    }

    async doesExist(caseNr: string) : Promise<boolean> {
        let result = await this.httpService.doSearch(this.enteredCaseNr, "/annro873");
        return result;
    }

    /** Change route to edit component */
    redirect() {
        this.router.navigate(['/edit']);
    }
}
