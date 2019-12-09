import { Injectable } from '@angular/core';
import { CaseDataService } from './case-data.service';
import { CaseNrService} from './case-nr.service';
import { Case } from '../models/case';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

/**
 * This service uploads a case to fileCloud
 */
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  /** The case data*/
  private case: Case;
  /** The case number*/
  caseNr: string;
  /** The upload path for the case*/
  uploadPath: string;
  uploadFolder: string;
  /** The YAML-file to store case data and to be uploaded to FileCLoud*/
  txtFile: Blob;
  /** Another YAML-file to store case data and to be uploaded to FileCLoud(specific formatting)*/
  txtPatientForm: Blob;

  /**
   * Sets case to another case retrieved from CaseDataService.
   * @param {CaseDataService} dataService 
   * @param {CaseNrService} caseNrService 
   * @param {HttpService} httpService 
   * @param {Router} router 
   */
  constructor(public dataService: CaseDataService,
              private caseNrService: CaseNrService,
              private httpService: HttpService,
              private router: Router) {
    this.case = this.dataService.getCase();
  }


/**
 * Redirects to the input path
 * @param path 
 */
  redirect(path) {
    console.log("Routing to: ", path)
    this.router.navigate([path]);

  }

  /**
   * Fetches data from case and generates a text-file containing the data. Then the text-file
   * together with the added images gets uploaded to FileCloud.
   * @param token 
   */
  async startUpload(token) {
    this.caseNr = this.caseNrService.getCaseNr(this.case.user.phone);
    this.dataService.getCase().caseNr = this.caseNr;
    this.uploadFolder = this.caseNr;

    console.log("Upload folder: ", this.uploadFolder)
    this.generateTXT();

    //TODO: Make sure that userLogin() is succesfull before the other once are done.
    console.log("Starting login with token: ", token)
    const result = await this.httpService.userLogin(token);
    console.log("RESULTS FROM LOGIN: ", result)
    const result1 = await this.httpService.createFolder(this.uploadFolder, token);
    console.log("Result from createFolder:" , result1)

    this.httpService.postFile(this.txtFile, this.uploadFolder, token, this.caseNr + ".txt");
    for (var image of this.case.images) {
      var blobImage = this.prepareBase64ForConversion(image.base64);
      this.httpService.postFile(blobImage, this.uploadFolder, token, image.name);
      console.log("Image. Size: " + blobImage.size + " Type: " + blobImage.type);
    }

    this.redirect("/confirmation");
  }

  //TODO or remove?
  realUpload() {

  }
  /**
   * Gets the image type and prepares the base64 string to convert to a Blob image type
   * @param base64 Base64 string version of the image
   */
    prepareBase64ForConversion(base64: string): Blob {

    var dataURI: string = base64;
    var removeBase64 = dataURI.split(';base64,')[0];
    var type = removeBase64.split(':')[1];
    console.log(type);

    var b64Data = dataURI.split(',')[1];
    //Always send 512 as the third parameter
    return this.base64toBlob(b64Data, type, 512);
    }

  /**
   * Converts a prepared base64 string to an image
   * @param b64Data Image data
   * @param contentType What type of image is being uploaded
   * @param sliceSize
   */
    base64toBlob(b64Data, contentType, sliceSize): Blob {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

  var blob = new Blob(byteArrays, {type: contentType});
  
  //Code below is for testing that the images are not corrupt after converting from base64 to Blob
  const url= window.URL.createObjectURL(blob);
  window.open(url);

  return blob;
}

  /**
   * Generates a text-file containing the data that is stored to the case object.
   * @param token
   */
  generateTXT() {
    var content = "Case number: " + this.caseNr + "\r\n"
      + "Name: " + this.case.user.name + "\r\n"
      + "Email: " + this.case.user.email + "\r\n"
      + "Phone: " + this.case.user.phone + "\r\n";
    this.txtFile = new Blob([content], { type: 'plain/text' });
  }


  /**
   * Generates a text-file containing the data that is 
   * stored to the case object and formatted in a specific way.
   * @param token
   */
  async generatePatientFormTXT(token) {
    var content: string = "Patientformulär för case: " + this.caseNr + "\r\n" + "\r\n";
        for(let i=0; i<this.dataService.getCase().patientForm.length; i++){
          var yesNoString = "Svar: Ej ifyllt. ";
          if(this.dataService.getCase().patientForm[i].value && this.dataService.getCase().patientForm[i].storedValue) {
            var yesNoString = "Svar: Ja. ";
          }
          else if(!this.dataService.getCase().patientForm[i].value && this.dataService.getCase().patientForm[i].storedValue) {
            var yesNoString = "Svar: Nej. ";
          }
          else {
            var yesNoString = "";
          }

          var formData = "";
          if (this.dataService.getCase().patientForm[i].complementary) {
            for(let k=0; k<this.dataService.getCase().patientForm[i].complementaryFormData.length; k++){
            formData = formData.concat(this.dataService.getCase().patientForm[i].ymlFormat[k] + this.dataService.getCase().patientForm[i].complementaryFormData[k]);
          }
        }
          var questionAndAnswers: string = i+1 + ". " + this.dataService.getCase().patientForm[i].question + "\r\n" + yesNoString + formData + "\r\n" + "\r\n";
          content = content.concat(questionAndAnswers);
        }
        if (this.dataService.getCase().transportInfo != null && this.dataService.getCase().transportInfo.length > 0) {
          content = content + "Hur ska patienten transporteras? " + "\r\n" + this.dataService.getCase().transportInfo + "\r\n" + "\r\n";
        }
        else {
          content = content + "Det finns ingen information för hur patienten ska transporteras." + "\r\n" + "\r\n";
        }

        if (this.dataService.getCase().dateofArrival && this.dataService.getCase().hasSavedDate) {
          content = content + "Förväntad ankomsttid till Brännskadecentrum i Linköping?" + "\r\n" + this.dataService.getCase().dateofArrival;
        }
        else {
          content = content + "Det finns ingen information för hur patientens ankomsttid.";
        }

    this.txtPatientForm = new Blob([content], { type: 'plain/text' });
    console.log(this.txtPatientForm);

    const result3 = await this.httpService.userLogin(token);
    console.log("Result from login:", result3)
    this.httpService.postFile(this.txtPatientForm, this.uploadFolder, token, "patientformular.txt");
    this.redirect("/confirmation");
  }

}
