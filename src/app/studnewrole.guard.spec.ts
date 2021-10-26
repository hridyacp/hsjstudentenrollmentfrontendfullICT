import { TestBed } from '@angular/core/testing';

import { StudnewroleGuard } from './studnewrole.guard';

describe('StudnewroleGuard', () => {
  let guard: StudnewroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudnewroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
