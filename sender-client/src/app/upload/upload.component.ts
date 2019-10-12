import { Component, OnInit } from '@angular/core';
import { HttpService} from "../http.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [HttpService]
})
export class UploadComponent implements OnInit {

  title = 'sender-client';

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;


  constructor(public httpService: HttpService) { }


  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

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
