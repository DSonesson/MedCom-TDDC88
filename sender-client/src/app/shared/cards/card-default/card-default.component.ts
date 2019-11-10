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
    this.imagePreview = [];
    this.loadImage();
  
}

loadImage() {
  console.log("Length" + this.dataService.getCase().images.length)
  for (let i = 0; i < this.dataService.getCase().images.length; i++) {
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview[i] = reader.result;
    };
    reader.readAsDataURL(this.dataService.getCase().images[i].file);
  }
}

  ngOnInit() {
  }

}
