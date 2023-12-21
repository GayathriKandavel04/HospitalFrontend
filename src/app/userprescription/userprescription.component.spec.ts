import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprescriptionComponent } from './userprescription.component';

describe('UserprescriptionComponent', () => {
  let component: UserprescriptionComponent;
  let fixture: ComponentFixture<UserprescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserprescriptionComponent]
    });
    fixture = TestBed.createComponent(UserprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
