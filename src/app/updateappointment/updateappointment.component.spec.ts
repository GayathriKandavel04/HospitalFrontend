import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateappointmentComponent } from './updateappointment.component';

describe('UpdateappointmentComponent', () => {
  let component: UpdateappointmentComponent;
  let fixture: ComponentFixture<UpdateappointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateappointmentComponent]
    });
    fixture = TestBed.createComponent(UpdateappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
