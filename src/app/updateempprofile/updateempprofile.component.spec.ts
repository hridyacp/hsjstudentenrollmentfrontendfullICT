import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateempprofileComponent } from './updateempprofile.component';

describe('UpdateempprofileComponent', () => {
  let component: UpdateempprofileComponent;
  let fixture: ComponentFixture<UpdateempprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateempprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateempprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
