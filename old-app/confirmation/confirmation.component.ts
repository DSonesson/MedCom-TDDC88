import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  caseNumber: string; //TODO: Implement as observable variable from uploadService

  constructor() { }

  //TODO: Implement
  onEdit() { }

  ngOnInit() {
  }

}
