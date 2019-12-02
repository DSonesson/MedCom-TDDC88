/**
 * Edit-case Component
 * @version 1.0
 * @author Albin Lindén <albli248@student.liu.se> *
 * @author Henrik Johansson <henjo114@student.liu.se>
 */

import { Component, OnInit } from '@angular/core';
import { UploadService } from 'app/shared/upload.service';
import { AuthAssistantService} from 'app/shared/auth-assistant.service';


@Component({
  selector: 'edit',
  templateUrl: './edit-case.component.html',
  styleUrls: ['./edit-case.component.scss']
})
export class EditCaseComponent implements OnInit {

  constructor(private uploadService: UploadService,
              public authService: AuthAssistantService) { }

  ngOnInit() { }

  uploadPatientForm() {
    console.log("OKOK")
    this.authService.getAssistant().loginIfRequired().then( () => {
      console.log("Token in upload: ", this.authService.getAssistant().getAuthHeader())
      this.uploadService.generatePatientFormYML(this.authService.getAssistant().getAuthHeader());
    })
  }
}
