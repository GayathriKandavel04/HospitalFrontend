import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreceptionistComponent } from './addreceptionist.component';

describe('AddreceptionistComponent', () => {
  let component: AddreceptionistComponent;
  let fixture: ComponentFixture<AddreceptionistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddreceptionistComponent]
    });
    fixture = TestBed.createComponent(AddreceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
