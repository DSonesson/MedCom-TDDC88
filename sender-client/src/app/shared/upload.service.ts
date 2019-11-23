import { Injectable } from '@angular/core';
import { CaseDataService } from './case-data.service';
import { CaseNrService} from './case-nr.service';
import { Case } from '../models/case';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private case: Case;
  caseNr: string;
  uploadPath: string;
  ymlFile: File;
  ymlPatientForm: File;

  constructor(public dataService: CaseDataService, private caseNrService: CaseNrService, private httpService: HttpService) {
    this.case = this.dataService.getCase();
  }

    startUpload() {
    this.caseNr = this.caseNrService.getCaseNr(this.case.user.phone);
    this.dataService.getCase().caseNr = this.caseNr;
    this.uploadPath = this.caseNr;

    this.generateYML();

    //TODO: Make sure that userLogin() is succesfull before the other once are done.
    this.httpService.userLogin();
    this.httpService.createFolder(this.uploadPath);
    //This should be looped once several files are stored.
    this.httpService.postFile(this.ymlFile, this.uploadPath);
    for (var image of this.case.images) {
      this.httpService.postFile(image.file, this.uploadPath);
    }
  }

  realUpload() {
  }

  generateYML() {
    var content = "Case number: " + this.caseNr + "\r\n"
        + "Name: " + this.case.user.name + "\r\n"
        + "Email: " + this.case.user.email + "\r\n"
        + "Phone: " + this.case.user.phone + "\r\n";
    this.ymlFile = new File([content], this.caseNr + ".yml");
  }

  generatePatientFormYML() {
    var content = "Case number: " + this.caseNr + "\r\n"
        + "Name: " + this.case.user.name + "\r\n"
        + "Email: " + this.case.user.email + "\r\n"
        + "Phone: " + this.case.user.phone + "\r\n";
     
        for(let i=0; i<this.dataService.getCase().patientForm.length; i++){
          var yesNoString = "Svar: Nej";
          if(this.dataService.getCase().patientForm[i].value) {
            var yesNoString = "Svar: Ja";
          }
          var str2: string = i+1 + ". " + this.dataService.getCase().patientForm[i].question + "\r\n" + yesNoString + "\r\n" + "\r\n";  
          var content = content.concat(str2);
        }
    this.ymlPatientForm = new File([content], "patientformulär-" + this.dataService.getCase().caseNr + ".yml");
    console.log(this.ymlPatientForm);

    this.httpService.userLogin();
    this.httpService.postFile(this.ymlPatientForm, this.dataService.getCase().caseNr);
  }

}
