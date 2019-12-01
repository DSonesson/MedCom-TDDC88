import { Injectable } from '@angular/core';
import { CaseDataService } from './case-data.service';
import { CaseNrService} from './case-nr.service';
import { Case } from '../models/case';
import { HttpService } from './http.service';


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
  ymlFile: File;
  /** Another YAML-file to store case data and to be uploaded to FileCLoud(specific formatting)*/
  ymlPatientForm: File;

  /**
   * Creates a instance of UploadService
   * and sets case to another case retrieved from CaseDataService.
   */
  constructor(public dataService: CaseDataService, private caseNrService: CaseNrService, private httpService: HttpService) {
    this.case = this.dataService.getCase();
  }

  /**
   * Fetches data from case and generates a YAML-file containing the data. Then the YAML-file
   * together with the added images gets uploaded to FileCloud.
   *
   * @returns Nothing is returned.
   */
  async startUpload(token) {
    this.caseNr = this.caseNrService.getCaseNr(this.case.user.phone);
    this.dataService.getCase().caseNr = this.caseNr;
    this.uploadFolder = this.caseNr;

    console.log("Upload folder: ", this.uploadFolder)
    this.generateYML();

    //TODO: Make sure that userLogin() is succesfull before the other once are done.
    console.log("Starting login with token: ", token)
    const result = await this.httpService.userLogin(token);
    console.log("RESULTS FROM LOGIN: ", result)
    const result1 = await this.httpService.createFolder(this.uploadFolder, token);
    console.log("Result from createFolder:" , result1)

    this.httpService.postFile(this.ymlFile, this.uploadFolder, token);
    for (var image of this.case.images) {
      this.httpService.postFile(image.file, this.uploadFolder, token);
    }
  }

  //TODO or remove?
  realUpload() {

  }

  /**
   * Generates a YAML-file containing the data that is stored to the case object.
   *
   * @returns Nothing is returned.
   */
  generateYML() {
    var content = "Case number: " + this.caseNr + "\r\n"
      + "Name: " + this.case.user.name + "\r\n"
      + "Email: " + this.case.user.email + "\r\n"
      + "Phone: " + this.case.user.phone + "\r\n";
    this.ymlFile = new File([content], this.caseNr + ".yml");
  }


  /**
   * Generates a YAML-file containing the data that is stored to the case object and formatted in a specific way.
   *
   * @returns Nothing is returned.
   */
  generatePatientFormYML() {
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

    this.ymlPatientForm = new File([content], "patientformular-" + this.dataService.getCase().caseNr + ".yml");
    console.log(this.ymlPatientForm);

    this.httpService.userLogin("nothing");
    //this.httpService.postFile(this.ymlPatientForm, this.dataService.getCase().caseNr);
  }

}
