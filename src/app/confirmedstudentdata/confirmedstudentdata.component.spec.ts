import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedstudentdataComponent } from './confirmedstudentdata.component';

describe('ConfirmedstudentdataComponent', () => {
  let component: ConfirmedstudentdataComponent;
  let fixture: ComponentFixture<ConfirmedstudentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedstudentdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
