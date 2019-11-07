import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {

  constructor() { }
 
  onFileUpload(event){
    const file = event.target.files[0]
    }
  ngOnInit() {
  }

  onSave() {
    alert('hej');
    let element: HTMLElement = document.getElementsByClassName('upload-input')[0] as HTMLElement;
    element.click();
  }

}
