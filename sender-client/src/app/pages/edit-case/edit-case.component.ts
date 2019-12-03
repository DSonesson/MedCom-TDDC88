/**
 * Edit-case Component
 * @version 1.0
 * @author Albin Lindén <albli248@student.liu.se> *
 * @author Henrik Johansson <henjo114@student.liu.se>
 */

import { Component, OnInit, NgZone } from '@angular/core';
import { UploadService } from 'app/shared/upload.service';
import { AuthAssistantService} from 'app/shared/auth-assistant.service';
import { CaseDataService } from 'app/shared/case-data.service';


@Component({
  selector: 'edit',
  templateUrl: './edit-case.component.html',
  styleUrls: ['./edit-case.component.scss']
})
export class EditCaseComponent implements OnInit {

  constructor(private uploadService: UploadService,
              public authService: AuthAssistantService,
              private ngZone: NgZone,
              public dataService: CaseDataService) { }

  ngOnInit() { }

  /**
   * Uploads the patient form data to FileCloud as a txt file.
   */
  uploadPatientForm() {
    console.log("OKOK")
    this.authService.getAssistant().loginIfRequired().then( () => {
      this.ngZone.run( () => {
        console.log("Token in upload: ", this.authService.getAssistant().getAuthHeader())
        this.uploadService.generatePatientFormYML(this.authService.getAssistant().getAuthHeader());
      })
    })
    this.clearData();
  }

  /**
   * Clears all the data in the complementary form
   */
  clearData() {
    this.dataService.clearPatientFormData();
  }
}
