import { Component, OnInit } from '@angular/core';
import { HttpConnectService } from '../http-connect.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _http: HttpConnectService) { }

  ngOnInit() {
    this._http.fileCloudLogin();
    this._http.fileCloudStore();
  }

}
