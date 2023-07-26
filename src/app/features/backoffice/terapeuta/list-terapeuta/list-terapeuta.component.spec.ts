import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTerapeutaComponent } from './list-terapeuta.component';

describe('ListTerapeutaComponent', () => {
  let component: ListTerapeutaComponent;
  let fixture: ComponentFixture<ListTerapeutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTerapeutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTerapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
