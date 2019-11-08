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
      'userid':'albli248','password':'dSMFBaeL'
    }

    this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp);
    })
  }

  // //TODO: Add uploadPath as parameter.
  // postFile(fileToUpload: File) {
  //   const appname = "Chrome/56.0.2924.87";
  //   const path = "/liali209";
  //   const endpoint = this.url + '/core/upload' + '?appname=' + appname + '&path=' + path + '&offset=0&complete=1&filename=' + fileToUpload.name;
  //   const formData: FormData = new FormData();

  //   formData.append('Image', fileToUpload, fileToUpload.name);

  //   // todo: change to http.request
  //   return this.http.post(endpoint, formData);
  // }

  // //TODO: Implement
  // createFolder(caseNumber: string) { }

  //TODO: Add uploadPath as parameter.
  postFile(fileToUpload: File, uploadPath: string) {
    const appname = "Chrome/56.0.2924.87";
    // const endpoint = this.url + '/core/upload' + '?appname=' + appname + '&path=' + uploadPath + '&offset=0&complete=1&filename=' + fileToUpload.name;

    const formData: FormData = new FormData();

    formData.append('Image', fileToUpload, fileToUpload.name);

    const req = this.url + '/core/upload'
    const headers = new HttpHeaders({
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })

    const params = {
      'path':uploadPath,'offset':'0', 'complete':'1','filename':fileToUpload.name,'appname':'explorer'
    }

    this.http.request('POST', req, {'body': formData, headers, params, 'responseType':"text"})
    .subscribe(resp => {
      console.log(resp)
    })
  }

  //TODO: Implement
  createFolder(caseNumber: string) { 

    // const req = 'https://company3.filecloudonline.com' + '/app/explorer/createfolder'
    const req = this.url + '/app/explorer/createfolder'

    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })

    const params = {
      'name': caseNumber,
      'path': '/albli248'
    }

    this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp)
    })

  }

}
