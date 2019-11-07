import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    alert('hej');
    let element: HTMLElement = document.getElementsByClassName('upload-input')[0] as HTMLElement;
    element.click();
  }

}
