import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdoctorComponent } from './userdoctor.component';

describe('UserdoctorComponent', () => {
  let component: UserdoctorComponent;
  let fixture: ComponentFixture<UserdoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdoctorComponent]
    });
    fixture = TestBed.createComponent(UserdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
