import { Injectable } from '@angular/core';
import {HttpService} from '../app/http.service'
import { CaseNumberService } from './case-number.service';



@Injectable({
  providedIn: 'root'
})
export class UploadService {

  name: string;   //TODO: Should be implemented as observable variables
  email: string;  //TODO: Should be implemented as observable variables
  phone: string;  //TODO: Should be implemented as observable variables
  images: [];     //TODO: Should be implemented as observable variables
  caseNumber: string; //TODO: Should be implemented as observable variables

  uploadPath: string; //TODO: implement
  ymlFiles: any; //TODO: Should be implemented, and be a ymlFile

  constructor(public httpService: HttpService, public CaseNumberService: CaseNumberService) { }

  //TODO: Implement
  startUpload(name: string, email: string, phone: string, images: []) { 
     this.name = name;
     this.email = email;
     this.phone = phone;
     this.images = images;
     this.caseNumber =this.CaseNumberService.generateCaseNumber();
     this.generateYML();
     this.uploadPath = this.caseNumber;
     this.httpService.createFolder(this.caseNumber);
     this.httpService.postFile(this.ymlFiles);
    
     for (let i of images) {
    this.httpService.postFile(i);

     }
     
 }

  //TODO: Implement
  generateYML() { 
    
  }
  
}
