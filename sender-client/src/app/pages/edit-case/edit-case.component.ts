/**
 * Edit-case Component
 * @version 1.0
 * @author Albin Lindén <albli248@student.liu.se> *
 * @author Henrik Johansson <henjo114@student.liu.se>
 */

import { Component, OnInit } from '@angular/core';
import { UploadService } from 'app/shared/upload.service';

@Component({
  selector: 'edit',
  templateUrl: './edit-case.component.html',
  styleUrls: ['./edit-case.component.scss']
})
export class EditCaseComponent implements OnInit {

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  uploadPatientForm() {
    this.uploadService.generatePatientFormYML();
  }

}
