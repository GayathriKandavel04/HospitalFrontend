import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistlistComponent } from './receptionistlist.component';

describe('ReceptionistlistComponent', () => {
  let component: ReceptionistlistComponent;
  let fixture: ComponentFixture<ReceptionistlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionistlistComponent]
    });
    fixture = TestBed.createComponent(ReceptionistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
