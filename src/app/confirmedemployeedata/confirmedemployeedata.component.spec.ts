import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedemployeedataComponent } from './confirmedemployeedata.component';

describe('ConfirmedemployeedataComponent', () => {
  let component: ConfirmedemployeedataComponent;
  let fixture: ComponentFixture<ConfirmedemployeedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedemployeedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedemployeedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
