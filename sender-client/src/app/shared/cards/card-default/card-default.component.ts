import { Component, OnInit } from '@angular/core';
import { CaseDataService } from '../../case-data.service';
import { Case } from '../../../models/case';

@Component({
  selector: 'app-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss']
})

export class CardDefaultComponent implements OnInit {

  private case: Case;


  constructor(public dataService: CaseDataService) { 
    this.case = this.dataService.getCase();
  }

  ngOnInit() {
  }

}
