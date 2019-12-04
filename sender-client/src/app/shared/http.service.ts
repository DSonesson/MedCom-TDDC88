import { Injectable, Predicate } from '@angular/core';
  const req = 'http://localhost:8080/token';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { NgxXml2jsonService } from 'ngx-xml2json';
import xml2js from 'xml2js';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:4200/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient) {
  }

  /**
   * User login the FileCloud server.
   */
  userLogin() {
    const req = this.url + '/core/loginguest'
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
      observe: 'response'
    })
    const params = {
      'userid': 'annro873', 'password': 'vLieZJzd'
    }

    this.http.request('POST', req, { headers, params, 'responseType': "text" }).subscribe(resp => {
      console.log(resp);
    })
  }

  private userLogin1(): Promise<string> {
    const req = this.url + '/core/loginguest'
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
      'observe': 'response'
    })
    const params = {
      'userid': 'annro873', 'password': 'vLieZJzd'
    }

    return this.http.request('POST', req, { headers, params, 'responseType': "text" }).toPromise();
  }

  /**
   * Upload a file to the specific path in FileCloud server.
   * @param fileToUpload The file that needs to be uploaded.
   * @param uploadPath The path where to upload the file in FileCloud server.
   * 
   * @returns Nothing is returned.
   */
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
      'path': uploadPath,
      'offset': '0',
      'complete': '1',
      'filename': fileToUpload.name,
      'appname': 'explorer'
    }

    this.http.request('POST', req, { 'body': formData, headers, params, 'responseType': "text" })
      .subscribe(resp => {
        console.log(resp)
      })
  }

  /**
   * Create a folder named as the case number in FileCloud server.
   * @param caseNumber A case number which is the name of the folder to be created.
   * 
   * @returns Nothing is returned.
   */
  createFolder(caseNumber: string) {

    // const req = 'https://company3.filecloudonline.com' + '/app/explorer/createfolder'
    const req = this.url + '/app/explorer/createfolder'

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })

    const params = {
      'name': caseNumber,
      'path': '/annro873'
    }

    this.http.request('POST', req, { headers, params, 'responseType': "text" }).subscribe(resp => {
      console.log(resp)
    })

  }

  async doSearch(caseNr: string, searchloc: string): Promise<boolean> {

    const loginData = await this.userLogin1();
    
    const searchData = await this.search(caseNr, searchloc);
    
    var total = 0;

    xml2js.parseString(searchData, function (err, result) {
      console.log(result.entries.meta[0].total[0]);
      total = result.entries.meta[0].total[0];
    });
    console.log("total = " + total);
    console.log(total >= 0);
    return total > 0;
  }

  private search(caseNr: string, searchloc: string): Promise<string> {
    const req = this.url + '/core/dosearch'

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })

    const params = {
      'searchstring': caseNr,
      'searchloc': searchloc,
    }

    return this.http.request('POST', req, { headers, params, 'responseType': "text" }).toPromise();
  }

  async getToken() : Promise<string> {
    const req = '/api1/auth/token';
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Response-Type': 'text',
        'Access-Control-Allow-Origin': '*'
      });

      const rsp = await this.http.get<TokenJson>(req).toPromise<TokenJson>()
      
      return rsp.accessToken;
  }

}

interface TokenJson {
  accessToken:string
  expiresIn: number
  scope: string
  tokenType: string
}