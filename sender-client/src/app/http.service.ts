import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:4200/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient) {
  }

  //TODO: Figure out where this should be called.
  userLogin() {
    const req = this.url + '/core/loginguest'
    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
      observe: 'response'
      // 'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Content-Type',
      //'Cookie': 'X-XSRF-TOKEN=aqt1uuezrl4q9uu03ipl'
      // "User-Agent":"Chrome/56.0.2924.87"
    })
    const params = {
      'userid':'liali209','password':'J1qF7BfY'
    }

    this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp);
    })
  }

  //TODO: Add uploadPath as parameter.
  postFile(fileToUpload: File) {
    const appname = "Chrome/56.0.2924.87";
    const path = "/liali209/";
    const endpoint = this.url + '/core/upload' + '?appname=' + appname + '&path=' + path + '&offset=0&complete=1&filename=' + fileToUpload.name;
    const formData: FormData = new FormData();

    formData.append('Image', fileToUpload, fileToUpload.name);

    // todo: change to http.request
    return this.http.post(endpoint, formData);
  }

  //TODO: Implement
  createFolder(caseNumber: string) { }

}
