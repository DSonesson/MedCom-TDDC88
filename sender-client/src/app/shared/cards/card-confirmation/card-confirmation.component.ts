import { Component, OnInit } from '@angular/core';
import { CaseDataService } from '../../case-data.service';
import { Case } from '../../../models/case';

@Component({
  selector: 'app-card-confirmation',
  templateUrl: './card-confirmation.component.html',
  styleUrls: ['./card-confirmation.component.scss']
})
export class CardConfirmationComponent implements OnInit {

  case: Case;
  
  constructor(public dataService: CaseDataService) { 
    this.case = this.dataService.getCase();
  }

  ngOnInit() {
  }

}
