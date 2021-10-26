import { TestBed } from '@angular/core/testing';

import { EmpnewroleGuard } from './empnewrole.guard';

describe('EmpnewroleGuard', () => {
  let guard: EmpnewroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmpnewroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
