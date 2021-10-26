import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachcourseComponent } from './eachcourse.component';

describe('EachcourseComponent', () => {
  let component: EachcourseComponent;
  let fixture: ComponentFixture<EachcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
