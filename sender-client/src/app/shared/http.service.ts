import { Injectable, Predicate } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { NgxXml2jsonService } from 'ngx-xml2json';
import xml2js from 'xml2js';

/**
 * This is a service that handles the HTTP-requests to the FileCloud-API
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //url = 'http://localhost:4200/api';
  url = 'https://api.regionostergotland.se/file/fileservice/v1';

  private response: any;

  constructor(private http: HttpClient) { }

  /**
   * User login the FileCloud server.
   */
  userLogin(token):Promise<string> {
    const req = this.url + '/login';
    const headers = new HttpHeaders({
      'Authorization': token
    })

    return this.http.request('POST', req, {headers, 'responseType':"text"}).toPromise();
  }

  /**
   * Upload a file to the specific path in FileCloud server.
   * @param fileToUpload The file that needs to be uploaded.
   * @param uploadPath The path where to upload the file in FileCloud server.
   *
   * @returns Nothing is returned.
   */
  postFile(fileToUpload: File, uploadFolder: string, token) {

    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);

    const req = this.url + '/upload'
    const uploadPath = '/SHARED/filecloudteam/BrivaPoC/' + uploadFolder;

    const httpParams = {
      'path': uploadPath,
      'offset':'0',
      'complete':'1',
      'filename':fileToUpload.name,
      'appname':'explorer'
    }




    const httpHeaders = new HttpHeaders ({
      "Authorization" : token,
    })


    this.http.post(req, formData, {headers: httpHeaders, params: httpParams, responseType: "text", withCredentials: true}).subscribe(resp => {
      console.log("postfile: ",resp)
    })
  }

  /**
   * Create a folder named as the case number in FileCloud server.
   * @param caseNumber A case number which is the name of the folder to be created.
   *
   * @returns Nothing is returned.
   */

  createFolder(caseNumber: string, token):Promise<string> {
    console.log("Staring create folder.", token)
    const req = this.url + '/createfolder'

    const httpHeaders = new HttpHeaders ({
      "Authorization" : token,
      "Content-type": "application/x-www-form-urlencoded"
    })

    const httpParams = {
      'name': caseNumber,
      'path': '/SHARED/filecloudteam/BrivaPoC'
    }

    //TODO, find a way to use this or remove it.
    var httpOptions = {
      headers: httpHeaders,
      params: httpParams,
      responseType: "text",
      withCredentials: true
    }

    return this.http.post(req, "", {headers: httpHeaders, params: httpParams, responseType: "text", withCredentials: true}).toPromise();
  }

  async doSearch(caseNr:string, token) : Promise<boolean> {

    const searchloc = '/SHARED/filecloudteam/BrivaPoC'
    const loginData = await this.userLogin(token);
    console.log(loginData)

    const searchData = await this.search(caseNr, searchloc, token);
    console.log(searchData);

    var total = 0;

    xml2js.parseString(searchData, function (err, result) {
        console.log(result.entries.meta[0].total[0]);
        total = result.entries.meta[0].total[0];
    });
    console.log("total = " + total);
    console.log(total > 0);
    return total > 0;
  }

  private search(caseNr:string, searchloc:string, token) : Promise<string> {
    const req = this.url + '/search'
    console.log("Searching for: ", caseNr)
    const httpHeaders = new HttpHeaders({
      "Authorization" : token,
      "Content-type": "application/x-www-form-urlencoded"
    })

    const httpParams = {
      'searchstring': caseNr,
      'searchloc': searchloc,
    }

    return this.http.post(req, "", {headers: httpHeaders, params: httpParams, responseType: "text", withCredentials: true}).toPromise();
  }
}
