import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  name: string; //TODO: Implement as observable variable from uploadService
  email: string; //TODO: Implement as observable variable from uploadService
  phone: string; //TODO: Implement as observable variable from uploadService
  images: []; //TODO: Implement as observable variable from uploadService

  constructor() { }

  //TODO: Implement
  onBack() { }

  //TODO: Implement
  onSubmit() { }

  ngOnInit() {
  }

}
