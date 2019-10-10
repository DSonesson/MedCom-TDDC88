import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  hej: string = "hej2";

  @Input()
  public data: string

  @Output()
  public onData: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  preview2(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  takePicture(){
    console.log("Hello1");
    let element: HTMLElement = document.getElementsByClassName('test')[0] as HTMLElement;
    element.setAttribute("capture", "");
    element.click();
    }
  
    upload(){
      console.log("Hello1");
      let element: HTMLElement = document.getElementsByClassName('test')[0] as HTMLElement;
      element.removeAttribute("capture");
      element.click();
      }

  onSubmit() {
  }

  updateData() {
    //send data back to parent
    //data could be coming from a service/async http request as well.
    this.data = this.imgURL;
    this.onData.emit(this.data);
  }

}
