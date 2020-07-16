import { TestBed } from '@angular/core/testing';

import { OnlinetestService } from './onlinetest.service';

describe('OnlinetestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlinetestService = TestBed.get(OnlinetestService);
    expect(service).toBeTruthy();
  });
});
