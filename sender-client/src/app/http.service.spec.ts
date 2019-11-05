import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

import { HttpClientTestingModule } from '@angular/common/http/testing'


describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientTestingModule] }));

  /*
  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
   */

  it('should have working Unit test-test', () => {
    const service: HttpService = TestBed.get(HttpService);
    var resp:string = service.testUnittesting();
    var exp:string = "test-respons";
    expect(resp).toEqual(exp);
  });


  it('should have working userlogin()', () => {
    const service: HttpService = TestBed.get(HttpService);
    var resp = service.userLogin();

    console.log("In test")
    console.log(resp)

    /*
    resp.subscribe(resp => {
      console.log(resp);
    })

     */

    var strresp:string = String(resp);
    var exp:string = "<commands><command><type>loginguest</type><result>0</result><message>Site Expired. Please contact your admin.CLFC-00154</message></command></commands>";
    expect(strresp).toEqual(exp);
  });




});


