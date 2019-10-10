import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NONE_TYPE} from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: 'root'
})
export class HttpConnectService {

  value={"userid":"liali209","password":"J1qF7BfY"};
  url="https://company3.filecloudonline.com/core";
  headers = {"content-type":"application/x-www-form-urlencoded", "User-Agent":"Chrome/56.0.2924.87"};


  constructor(private http: HttpClient) {}


  fileCloudLogin() {

    console.log("FileCloud login attempt")
    return this.http.post(this.url + "/loginguest",NONE_TYPE, {
      headers:this.headers,
      params:this.value})
  }

  fileCloudStore(){
    console.log("todo");

  }
}
