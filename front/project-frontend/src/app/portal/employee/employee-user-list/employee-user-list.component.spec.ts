import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUserListComponent } from './employee-user-list.component';

describe('EmployeeUserListComponent', () => {
  let component: EmployeeUserListComponent;
  let fixture: ComponentFixture<EmployeeUserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeUserListComponent]
    });
    fixture = TestBed.createComponent(EmployeeUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
