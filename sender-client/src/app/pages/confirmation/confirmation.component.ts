/**
 * Confirmation Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';
import { CaseDataService } from 'app/shared/case-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(public dataService: CaseDataService) { }

clearData() {
this.dataService.clearUserData();

}


  ngOnInit() {
  }

}
