import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

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
