import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpconfirmedstudentdataComponent } from './empconfirmedstudentdata.component';

describe('EmpconfirmedstudentdataComponent', () => {
  let component: EmpconfirmedstudentdataComponent;
  let fixture: ComponentFixture<EmpconfirmedstudentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpconfirmedstudentdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpconfirmedstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
