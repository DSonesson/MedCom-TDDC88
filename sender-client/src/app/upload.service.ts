import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  name: string = "";
  email: string = "";
  phone: string = "";
  images: [];
  caseNumber: string; // TODO: Should be implemented as observable variables

  uploadPath: string; //TODO: implement
  ymlFiles: any; //TODO: Should be implemented, and be a ymlFile

  constructor() { }

  //TODO: Implement
  startUpload(name: string, email: string, phone: string, images: []) { }

 /**
* generateYML creates a YML file containing personal information to be uploaded together with the image/images.
* The variables used in the function are local variables that are given their value in the startUpload function.
* @returns The function returns a YML file containing personal information (Name, email, phone).
*/
generateYML() {

  var content = 
  "Case number: " + this.caseNumber + "\r\n"
  + "Name: " + this.name + "\r\n" 
  + "Email: " + this.email + "\r\n" 
  + "Phone: " + this.phone + "\r\n";
  this.ymlFiles = new File([content], this.caseNumber + ".yml");

  return this.ymlFiles;

 }

}
