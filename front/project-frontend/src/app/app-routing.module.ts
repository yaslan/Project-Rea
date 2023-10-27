import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';
import { ContactComponent } from './website/contact/contact.component';
import { LoginComponent } from './website/login/login.component';
import { AdminDashboardComponent } from './portal/admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './portal/employee/employee-dashboard/employee-dashboard.component';
import { CustomerDashboardComponent } from './portal/customer/customer-dashboard/customer-dashboard.component';
import { PortalLayoutComponent } from './portal/portal-layout/portal-layout.component';
import { AdminTransactionsComponent } from './portal/admin/admin-transactions/admin-transactions.component';
import { AdminAccountsComponent } from './portal/admin/admin-accounts/admin-accounts.component';
import { AdminUserListComponent } from './portal/admin/admin-user-list/admin-user-list.component';
import { AdminAddUserComponent } from './portal/admin/admin-add-user/admin-add-user.component';
import { EmployeeTransactionsComponent } from './portal/employee/employee-transactions/employee-transactions.component';
import { EmployeeAccountsComponent } from './portal/employee/employee-accounts/employee-accounts.component';
import { EmployeeUserListComponent } from './portal/employee/employee-user-list/employee-user-list.component';
import { CustomerAccountComponent } from './portal/customer/customer-account/customer-account.component';
import { CustomerTransactionComponent } from './portal/customer/customer-transaction/customer-transaction.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  
  {
    path: 'portal-layout',
    component: PortalLayoutComponent,
    children: [
      { path: 'admin/dashboard', component: AdminDashboardComponent },
      { path: 'admin/add-user', component: AdminAddUserComponent },
      { path: 'admin/user-list', component: AdminUserListComponent },
      { path: 'admin/accounts', component: AdminAccountsComponent },
      { path: 'admin/transactions', component: AdminTransactionsComponent },
    ],
  },
  {
    path: 'portal-layout',
    component: PortalLayoutComponent,
    children: [
      { path: 'employee/dashboard', component: EmployeeDashboardComponent },
      { path: 'employee/user-list', component: EmployeeUserListComponent },
      { path: 'employee/accounts', component: EmployeeAccountsComponent },
      { path: 'employee/transactions', component: EmployeeTransactionsComponent },
    ],
  },
  {
    path: 'portal-layout',
    component: PortalLayoutComponent,
    children: [
      { path: 'customer/dashboard', component: CustomerDashboardComponent },
      { path: 'customer/account', component: CustomerAccountComponent },
      { path: 'customer/transaction', component: CustomerTransactionComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
