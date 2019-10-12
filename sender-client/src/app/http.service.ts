import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'https://company3.filecloudonline.com';

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

  adminLogin() {
    console.log("adminLogin")
    const req = this.url + '/admin/'
    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })
    const params = {
      'op':'adminlogin',
      'adminuser':'admin',
      'adminpassword':'DkGHI08l'
    }

    this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp);
    })
    // this.http.post(req, {'op':'adminlogin','adminuser':'admin','adminpassword':'DkGHI08l'}, this.httpOptions)
    // .subscribe(resp => {
    //   // console.log(resp);
    // })
  }

  userLogin() {
    console.log("userLogin")
    
    const req = this.url + '/core/loginguest'
    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })
    const params = {
      'userid':'liali209','password':'J1qF7BfY'
    }

    this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp);
    })
  }

  public upload() {
    console.log("upload")
    const req = this.url + '/core/upload'

    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })

    const params = {
      'path':'/company3/test','offset':'0', 'complete':'1','filename':'http.service.ts','appname':'explorer'
    }

    this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp)
    })
  }

  postFile(caption: string, fileToUpload: File) {
    console.log("upload")
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption)
    
    const req = this.url + '/core/upload'
    const headers = new HttpHeaders({
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })

    const params = {
      'path':'/liali209','offset':'0', 'complete':'1','filename':fileToUpload.name,'appname':'explorer'
    }

    this.http.request('POST', req, {'body': formData, headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp)
    })
  }
}


