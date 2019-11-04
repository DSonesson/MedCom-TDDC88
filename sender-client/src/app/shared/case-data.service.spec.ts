import { TestBed } from '@angular/core/testing';

import { CaseDataService } from './case-data.service';

describe('CaseDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseDataService = TestBed.get(CaseDataService);
    expect(service).toBeTruthy();
  });
});
