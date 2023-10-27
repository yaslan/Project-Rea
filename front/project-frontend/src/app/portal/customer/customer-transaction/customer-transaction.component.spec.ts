import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransactionComponent } from './customer-transaction.component';

describe('CustomerTransactionComponent', () => {
  let component: CustomerTransactionComponent;
  let fixture: ComponentFixture<CustomerTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerTransactionComponent]
    });
    fixture = TestBed.createComponent(CustomerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
