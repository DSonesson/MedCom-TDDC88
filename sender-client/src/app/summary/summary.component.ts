import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  name: string;
  email: string;
  phone: string;
  images: []; 

  constructor() { }

  //TODO: Implement
  onBack() { }

  //TODO: Implement
  onSubmit() { }

  ngOnInit() {
  }

}
