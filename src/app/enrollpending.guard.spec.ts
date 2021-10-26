import { TestBed } from '@angular/core/testing';

import { EnrollpendingGuard } from './enrollpending.guard';

describe('EnrollpendingGuard', () => {
  let guard: EnrollpendingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EnrollpendingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
