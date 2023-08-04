import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAvailabilityComponent } from './form-availability.component';

describe('FormAvailabilityComponent', () => {
  let component: FormAvailabilityComponent;
  let fixture: ComponentFixture<FormAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
