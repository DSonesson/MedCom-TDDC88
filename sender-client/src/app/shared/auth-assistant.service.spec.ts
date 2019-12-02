import { TestBed } from '@angular/core/testing';

import { AuthAssistantService } from './auth-assistant.service';

describe('AuthAssistantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAssistantService = TestBed.get(AuthAssistantService);
    expect(service).toBeTruthy();
  });
});
