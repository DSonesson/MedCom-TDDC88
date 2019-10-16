import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  name: string;
  email: string;
  phone: string;
  images: [];
  caseNumber: string; //TODO: Should be implemented as observable variables

  uploadPath: string; //TODO: implement
  ymlFiles: any; //TODO: Should be implemented, and be a ymlFile

  constructor() { }

  //TODO: Implement
  startUpload(name: string, email: string, phone: string, images: []) { }

  //TODO: Implement
  generateYML() { }

}
