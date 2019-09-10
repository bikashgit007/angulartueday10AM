import { TestBed } from '@angular/core/testing';

import { DevattendanceService } from './devattendance.service';

describe('DevattendanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevattendanceService = TestBed.get(DevattendanceService);
    expect(service).toBeTruthy();
  });
});
