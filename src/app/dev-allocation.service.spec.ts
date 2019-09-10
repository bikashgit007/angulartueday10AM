import { TestBed } from '@angular/core/testing';

import { DevAllocationService } from './dev-allocation.service';

describe('DevAllocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevAllocationService = TestBed.get(DevAllocationService);
    expect(service).toBeTruthy();
  });
});
