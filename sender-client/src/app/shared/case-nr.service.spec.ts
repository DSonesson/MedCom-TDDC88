import { TestBed } from '@angular/core/testing';

import { CaseNrService } from './case-nr.service';

describe('CaseNrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseNrService = TestBed.get(CaseNrService);
    expect(service).toBeTruthy();
  });
});
