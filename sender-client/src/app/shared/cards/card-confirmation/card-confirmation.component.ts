import { Component, OnInit, Input } from '@angular/core';
import { CaseDataService } from '../../case-data.service';
import { Case } from '../../../models/case';

@Component({
  selector: 'app-card-confirmation',
  templateUrl: './card-confirmation.component.html',
  styleUrls: ['./card-confirmation.component.scss']
})
export class CardConfirmationComponent implements OnInit {

  case: Case;
  
  /**
  * The title, description and content of the card 
  */
  @Input ("title") title: String;
  @Input ("description") description: String;
  @Input ("importantContent") importantContent: String;
  @Input ("content") content: String;
  
  constructor(public dataService: CaseDataService) { 
    this.case = this.dataService.getCase();
  }

clearData() {

  this.dataService.clearUserData();

}


  ngOnInit() {
  }

}
