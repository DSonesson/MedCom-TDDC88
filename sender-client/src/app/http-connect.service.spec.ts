import { TestBed } from '@angular/core/testing';

import { HttpConnectService } from './http-connect.service';

describe('HttpConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpConnectService = TestBed.get(HttpConnectService);
    expect(service).toBeTruthy();
  });
});
