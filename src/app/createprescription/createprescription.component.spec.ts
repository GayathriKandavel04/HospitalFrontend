import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprescriptionComponent } from './createprescription.component';

describe('CreateprescriptionComponent', () => {
  let component: CreateprescriptionComponent;
  let fixture: ComponentFixture<CreateprescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateprescriptionComponent]
    });
    fixture = TestBed.createComponent(CreateprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
