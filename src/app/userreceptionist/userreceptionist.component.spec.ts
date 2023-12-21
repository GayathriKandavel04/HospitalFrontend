import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreceptionistComponent } from './userreceptionist.component';

describe('UserreceptionistComponent', () => {
  let component: UserreceptionistComponent;
  let fixture: ComponentFixture<UserreceptionistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserreceptionistComponent]
    });
    fixture = TestBed.createComponent(UserreceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
