import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenrollformComponent } from './studenrollform.component';

describe('StudenrollformComponent', () => {
  let component: StudenrollformComponent;
  let fixture: ComponentFixture<StudenrollformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenrollformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenrollformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
