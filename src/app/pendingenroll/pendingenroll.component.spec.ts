import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingenrollComponent } from './pendingenroll.component';

describe('PendingenrollComponent', () => {
  let component: PendingenrollComponent;
  let fixture: ComponentFixture<PendingenrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingenrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingenrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
