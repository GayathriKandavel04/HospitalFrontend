import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistdetailsComponent } from './receptionistdetails.component';

describe('ReceptionistdetailsComponent', () => {
  let component: ReceptionistdetailsComponent;
  let fixture: ComponentFixture<ReceptionistdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionistdetailsComponent]
    });
    fixture = TestBed.createComponent(ReceptionistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
