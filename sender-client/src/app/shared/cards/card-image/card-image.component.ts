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

  constructor(public dataService: CaseDataService, public httpService: HttpService) { }
 
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
    if(!this.imagesAvailable) {
    let element: HTMLElement = document.getElementsByClassName('upload-input')[0] as HTMLElement;
    element.click();
    }
    else {
      this.httpService.userLogin();
      this.httpService.postFile(this.dataService.getCase().images[1]).subscribe(
         data =>{
           console.log('done');
       }
     );    
    }
  }

}
