import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpenrollformComponent } from './empenrollform.component';

describe('EmpenrollformComponent', () => {
  let component: EmpenrollformComponent;
  let fixture: ComponentFixture<EmpenrollformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpenrollformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpenrollformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
