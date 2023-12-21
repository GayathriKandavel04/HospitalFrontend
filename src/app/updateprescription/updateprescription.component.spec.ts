import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprescriptionComponent } from './updateprescription.component';

describe('UpdateprescriptionComponent', () => {
  let component: UpdateprescriptionComponent;
  let fixture: ComponentFixture<UpdateprescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateprescriptionComponent]
    });
    fixture = TestBed.createComponent(UpdateprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
