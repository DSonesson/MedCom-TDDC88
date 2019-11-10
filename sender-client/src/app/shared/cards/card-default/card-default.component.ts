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
 imagePreview: any;

  constructor(public dataService: CaseDataService) { 
    this.case = this.dataService.getCase();
  console.log(this.case.randomtest);
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.dataService.getCase().images[0].file);
  
}

  ngOnInit() {
  }

}
