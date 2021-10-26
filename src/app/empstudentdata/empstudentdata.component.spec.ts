import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpstudentdataComponent } from './empstudentdata.component';

describe('EmpstudentdataComponent', () => {
  let component: EmpstudentdataComponent;
  let fixture: ComponentFixture<EmpstudentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpstudentdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
