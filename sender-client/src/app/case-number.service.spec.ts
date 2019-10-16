import { TestBed } from '@angular/core/testing';

import { CaseNumberService } from './case-number.service';

describe('CaseNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseNumberService = TestBed.get(CaseNumberService);
    expect(service).toBeTruthy();
  });
});
