import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
      // 'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Content-Type',
      // 'Cookie': 'X-XSRF-TOKEN=xhjnh030gsbvbyfp8urj'
      // "User-Agent":"Chrome/56.0.2924.87"
    })
  };

  constructor(private http: HttpClient) { }

  adminLogin() {
    console.log("adminLogin")
    const req = this.url + '/admin/'
    this.http.post(req, {'op':'adminlogin','adminuser':'admin','adminpassword':'DkGHI08l'}, this.httpOptions)
    .subscribe(resp => {
      // console.log(resp);
    })
  }

  userLogin() {
    console.log("userLogin")
    
    const req = this.url + '/core/loginguest'
    // this.http.post(req, {'userid':'liali209','password':'J1qF7BfY'}, this.httpOptions)
    // .subscribe(resp => {
    //   console.log(resp);
    // })

    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Content-Type',
      // 'Cookie': 'X-XSRF-TOKEN=xhjnh030gsbvbyfp8urj'
      // "User-Agent":"Chrome/56.0.2924.87"
    })

    const params = {
      'userid':'liali209','password':'J1qF7BfY'
    }
  
    this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp)
    })
  }

  upload() {
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

}


