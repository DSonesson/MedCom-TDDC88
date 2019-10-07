import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
   
  fileData = null;
  constructor(private http: HttpClient) { }
 
  ngOnInit() {
     
   
  }
 
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }
 
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('url/to/your/api', formData)
      .subscribe(res => {
        console.log(res);
        alert('Upladdad!');
      })
  }

}