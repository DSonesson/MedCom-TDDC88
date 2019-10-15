import { Component, OnInit } from '@angular/core';
import { HttpService} from "../http.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  name: string; //TODO: Implement as observable variable from uploadService
  email: string; //TODO: Implement as observable variable from uploadService
  phone: string; //TODO: Implement as observable variable from uploadService
  images: []; //TODO: Implement as observable variable from uploadService


  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(public httpService: HttpService) { }

  //TODO: Should be implemented as intended
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  //TODO: Should be implemented
  removeImage() { }

  //Todo: Should be renamed to onNext and implemented as intended.
  OnSubmit(Image){
    this.httpService.userLogin();
    this.httpService.postFile(this.fileToUpload).subscribe(
       data =>{
         console.log('done');
         Image.value = null;

     }
   );
  }

  ngOnInit() {
  }

}
