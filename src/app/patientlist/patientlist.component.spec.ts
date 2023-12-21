import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientlistComponent } from './patientlist.component';

describe('PatientlistComponent', () => {
  let component: PatientlistComponent;
  let fixture: ComponentFixture<PatientlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientlistComponent]
    });
    fixture = TestBed.createComponent(PatientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
