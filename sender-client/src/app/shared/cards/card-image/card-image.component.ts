import { Component, OnInit } from '@angular/core';
import { CaseDataService } from '../../case-data.service';
import { Case } from 'app/models/case';
import { Image } from 'app/models/image';
import { HttpService } from 'app/shared/http.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})

export class CardImageComponent implements OnInit {
  private _album: any = [];

  constructor(public dataService: CaseDataService, private _lightbox: Lightbox) {
    //this.loadImage();
    this.imagePreview = [];
    this.loadImage(true);
   }
 
 selectedFile : File;
 image : Image;
 imagePreview: any;
 imageCounter = this.dataService.getCase().images.length -1;

  imagesAvailable = false;
  src: any;


addImage(event){
  this.image = new Image;
  this.image.file = event.target.files[0];
  this.imagesAvailable = true;

  this.dataService.getCase().images.push(this.image);

 this.dataService.getCase().randomtest = 'kalle';
  this.loadImage();
}

removeImage(index: number){
  console.log(this.dataService.getCase().images.length);
  this.dataService.getCase().images.pop();
  console.log(this.dataService.getCase().images.length);
  var elementString: string = "" + index;
  var elem = document.getElementById(elementString);
  elem.remove();

  this.imageCounter--;
}

trackByFn(index, item) {
  return index;
}
 
onSave() {
  let element: HTMLElement = document.getElementsByClassName('upload-input')[0] as HTMLElement;
  element.click();
}

loadImage(load = false) {

  if (!load) {

    this.imageCounter++;
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview[this.imageCounter] = reader.result;
    this.src = reader.result;
    const album = {
      src: this.src
   };

   this._album.push(album);
    };
    reader.readAsDataURL(this.dataService.getCase().images[this.imageCounter].file);
  }
  else {
    for (let i = 0; i < this.dataService.getCase().images.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
      this.imagePreview[i] = reader.result;
      };
      reader.readAsDataURL(this.dataService.getCase().images[i].file);


    }
    console.log("test");
  }
}

open(index: number): void {
  // open lightbox
  console.log(this._album[index]);
  this._lightbox.open(this._album, index);
  console.log(index);
}

  ngOnInit() {
  }

}