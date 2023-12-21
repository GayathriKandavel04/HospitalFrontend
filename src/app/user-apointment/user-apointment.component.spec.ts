import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApointmentComponent } from './user-apointment.component';

describe('UserApointmentComponent', () => {
  let component: UserApointmentComponent;
  let fixture: ComponentFixture<UserApointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserApointmentComponent]
    });
    fixture = TestBed.createComponent(UserApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
