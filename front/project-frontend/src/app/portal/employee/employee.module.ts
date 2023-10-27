import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeUserListComponent } from './employee-user-list/employee-user-list.component';
import { EmployeeAccountsComponent } from './employee-accounts/employee-accounts.component';
import { EmployeeTransactionsComponent } from './employee-transactions/employee-transactions.component';



@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    EmployeeUserListComponent,
    EmployeeAccountsComponent,
    EmployeeTransactionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
