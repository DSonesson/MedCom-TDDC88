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

});
