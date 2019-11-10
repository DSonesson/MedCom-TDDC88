import { Component, OnInit } from '@angular/core';
import { CaseDataService } from '../../case-data.service';
import { Case } from 'app/models/case';
import { Image } from 'app/models/image';
import { HttpService } from 'app/shared/http.service';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})

export class CardImageComponent implements OnInit {

  constructor(public dataService: CaseDataService) {
    this.loadImage();
   }
 
 selectedFile : File;
 image : Image;
 imagePreview: any;

  imagesAvailable = false;


onFileUpload(event){
  this.image = new Image;
  //this.selectedFile = event.target.files[0];
  //const reader = new FileReader();
  //reader.onload = () => {
  //this.imagePreview = reader.result;
  //};
  //reader.readAsDataURL(this.selectedFile);
  this.image.file = event.target.files[0];
  this.imagesAvailable = true;
  //Only here for dummy-data.
  this.dataService.getCase().images.pop();
  this.dataService.getCase().images.push(this.image);

 this.dataService.getCase().randomtest = 'kalle';
  this.loadImage();
}
 
onSave() {
  let element: HTMLElement = document.getElementsByClassName('upload-input')[0] as HTMLElement;
  element.click();
}

//Should be looped in the future
loadImage() {
  const reader = new FileReader();
  reader.onload = () => {
  this.imagePreview = reader.result;
  var newEle = document.createElement("div");
  var target = document.getElementsByClassName('container')[0];
  target.appendChild(newEle);
  };
  reader.readAsDataURL(this.dataService.getCase().images[0].file);
}
  ngOnInit() {
  }

}