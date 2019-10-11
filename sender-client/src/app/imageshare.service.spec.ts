import { TestBed } from '@angular/core/testing';

import { ImageshareService } from './imageshare.service';

describe('ImageshareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageshareService = TestBed.get(ImageshareService);
    expect(service).toBeTruthy();
  });
});
