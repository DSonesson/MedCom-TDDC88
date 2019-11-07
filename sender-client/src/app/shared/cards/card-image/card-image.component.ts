import { Component, OnInit } from '@angular/core';
import { CaseDataService } from '../../case-data.service';
import { Case } from 'app/models/case';
import { Image } from 'app/models/image';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})

export class CardImageComponent implements OnInit {

  constructor(public dataService: CaseDataService) { }
 
 selectedFile : File;
 image : File;
 imagePreview: any;

  imagesAvailable = false;


onFileUpload(event){
  //this.selectedFile = event.target.files[0];
  //const reader = new FileReader();
  //reader.onload = () => {
  //this.imagePreview = reader.result;
  //};
  //reader.readAsDataURL(this.selectedFile);
 
  this.image = event.target.files[0];
  this.imagesAvailable = true;
  this.dataService.caseData.images.push(this.image);

  const reader = new FileReader();
  reader.onload = () => {
  this.imagePreview = reader.result;
  };
  reader.readAsDataURL(this.dataService.getCase().images[1]);
}
 
  ngOnInit() {
  }

  onSave() {
    let element: HTMLElement = document.getElementsByClassName('upload-input')[0] as HTMLElement;
    element.click();
  }

}
