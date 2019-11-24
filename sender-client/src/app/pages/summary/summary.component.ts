/**
 * Summary Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'app/shared/upload.service';
import { MatDialog } from '@angular/material';
import { PopupComponent } from 'app/shared/cards/popup/popup.component';
import { CaseDataService } from 'app/shared/case-data.service';

/**
 * This component shows the data the
 * user has specified and let the user
 * edit, submit or cancel the case. 
 */
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  /**
   * @param uploadService 
   * @param dialog 
   * @param dataService 
   */
  constructor(private uploadService: UploadService, private dialog: MatDialog, public dataService: CaseDataService) { }

  ngOnInit() {
  }

  startUpload() {
    this.uploadService.startUpload();
  }

 /**
  * Function of what happends when the 
  * user presses the cancel button. A popup
  * appears with the information defined in data. If 
  * the result from afterClosed is true the current
  * user data is cleared and the user is redirectet to
  * the front page (linked in the popup component). 
  */
  openDialog() {
    let dialogRef = this.dialog.open(PopupComponent, {
      data:{ content: "Är du säker på att du vill avsluta ditt ärende?", yesBtn: "Ja, avsluta", noBtn: "Nej, tillbaka" },
      width: "500px",
      height: "250px",
    }); 

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result: " + result);
      if (result) {
        this.dataService.clearUserData();
      } 
    });
  }

}
