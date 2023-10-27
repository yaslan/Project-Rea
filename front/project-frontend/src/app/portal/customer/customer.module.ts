import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { CustomerTransactionComponent } from './customer-transaction/customer-transaction.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerAccountComponent,
    CustomerTransactionComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
