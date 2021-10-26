import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsearchstudentsComponent } from './empsearchstudents.component';

describe('EmpsearchstudentsComponent', () => {
  let component: EmpsearchstudentsComponent;
  let fixture: ComponentFixture<EmpsearchstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpsearchstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsearchstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
