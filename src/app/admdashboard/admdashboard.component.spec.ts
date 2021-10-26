import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmdashboardComponent } from './admdashboard.component';

describe('AdmdashboardComponent', () => {
  let component: AdmdashboardComponent;
  let fixture: ComponentFixture<AdmdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
