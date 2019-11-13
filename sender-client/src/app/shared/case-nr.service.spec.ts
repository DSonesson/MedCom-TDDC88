import { TestBed } from '@angular/core/testing';

import { CaseNrService } from './case-nr.service';

describe('CaseNrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseNrService = TestBed.get(CaseNrService);
    expect(service).toBeTruthy();
  });

  it('test test', () => {
    const service: CaseNrService = TestBed.get(CaseNrService);
    
    var resp:string = service.testFunction()
    var exp:string = "output";
    expect(resp).toEqual(exp);
  });
});
