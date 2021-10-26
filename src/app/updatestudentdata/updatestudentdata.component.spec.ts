import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestudentdataComponent } from './updatestudentdata.component';

describe('UpdatestudentdataComponent', () => {
  let component: UpdatestudentdataComponent;
  let fixture: ComponentFixture<UpdatestudentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestudentdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
