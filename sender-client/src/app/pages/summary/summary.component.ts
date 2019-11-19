/**
 * Summary Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'app/shared/upload.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private uploadService: UploadService) { }



  startUpload() {
    this.uploadService.startUpload();
  }

  ngOnInit() {
  }

}
