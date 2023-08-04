import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisponibilityComponent } from './form-disponibility.component';

describe('FormDisponibilityComponent', () => {
  let component: FormDisponibilityComponent;
  let fixture: ComponentFixture<FormDisponibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDisponibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDisponibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
