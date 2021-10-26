import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmemployeeComponent } from './admemployee.component';

describe('AdmemployeeComponent', () => {
  let component: AdmemployeeComponent;
  let fixture: ComponentFixture<AdmemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
