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

  constructor(public dataService: CaseDataService, private caseNrService: CaseNrService, private httpService: HttpService) {
    this.case = this.dataService.getCase();
  }

  startUpload() {
    this.caseNr = this.caseNrService.getCaseNr(this.case.user.phone);
    this.dataService.getCase().caseNr = +this.caseNr;
    this.uploadPath = this.caseNr
    this.generateYML();

    //TODO: Make sure that userLogin() is succesfull before the other once are done.
    this.httpService.userLogin();
    this.httpService.createFolder(this.uploadPath);
    this.httpService.postFile(this.ymlFile, this.uploadPath);
    //This should be looped once several files are stored.
    this.httpService.postFile(this.case.images[0].file, this.uploadPath);

  }

  generateYML() {
    var content = "Case number: " + this.case.caseNr + "\r\n"
        + "Name: " + this.case.user.name + "\r\n"
        + "Email: " + this.case.user.email + "\r\n"
        + "Phone: " + this.case.user.phone + "\r\n";
    this.ymlFile = new File([content], this.case.caseNr + ".yml");
  }

}
