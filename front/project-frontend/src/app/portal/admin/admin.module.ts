import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminAccountsComponent } from './admin-accounts/admin-accounts.component';
import { AdminTransactionsComponent } from './admin-transactions/admin-transactions.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminAddUserComponent,
    AdminUserListComponent,
    AdminAccountsComponent,
    AdminTransactionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ]
})
export class AdminModule { }
