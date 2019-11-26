import { TestBed } from '@angular/core/testing';

import { CaseNrService } from './case-nr.service';

describe('CaseNrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseNrService = TestBed.get(CaseNrService);
    expect(service).toBeTruthy();
  });

  it('should return caseNr with correct length', () => {
    const service: CaseNrService = TestBed.get(CaseNrService);
    let caseNr;
    caseNr = service.getCaseNr("0701234567")
    expect(caseNr.length == 8).toBeTruthy();
  });


});

