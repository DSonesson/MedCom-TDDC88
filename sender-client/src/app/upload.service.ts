import { Injectable } from '@angular/core';

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

  constructor() { }

  //TODO: Implement
  startUpload() { }

  //TODO: Implement
  generateYML() { }
  
}
