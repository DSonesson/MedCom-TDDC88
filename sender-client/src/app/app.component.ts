import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  title = 'sender-client';

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(public httpService: HttpService) {
  }


  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption,Image){
<<<<<<< HEAD
   this.httpService.postFile(Caption.value,this.fileToUpload).subscribe(
     data =>{
       console.log('done');
       Caption.value = null;
       Image.value = null;
       this.imageUrl = "/assets/img/default-image.png";
     }
   );
=======
   this.httpService.postFile(Caption.value,this.fileToUpload)
  //  .subscribe(
  //    data =>{
  //      console.log('done');
  //      Caption.value = null;
  //      Image.value = null;
  //      this.imageUrl = "/assets/img/default-image.png";
  //    }
  //  );
>>>>>>> master
  }



}
