import { TestBed } from '@angular/core/testing';

import { UploadService } from './upload.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('UploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));


  it('should be created', () => {
    const service: UploadService = TestBed.get(UploadService);
    expect(service).toBeTruthy();
  });


});
