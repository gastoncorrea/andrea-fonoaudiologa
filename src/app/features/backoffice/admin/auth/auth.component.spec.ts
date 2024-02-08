import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AdminAuthComponent;
  let fixture: ComponentFixture<AdminAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
