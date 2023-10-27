import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Account } from 'src/core/models/account.model';
import { AccountRequest } from 'src/core/models/request/account-request.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-admin-accounts',
  templateUrl: './admin-accounts.component.html',
  styleUrls: ['./admin-accounts.component.scss'],
  providers: [MessageService],
})
export class AdminAccountsComponent {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService) {}

  accounts: Account[] = [];
  users: User[] = [];
  
  public transactionRequest: AccountRequest = <AccountRequest>{}

  ngOnInit() {
    this.apiService.getAllEntities(Account).subscribe((accountResult) => {
      this.accounts = accountResult.data;
    });
    this.apiService.getAllEntities(User).subscribe((userResult) => {
      this.users = userResult.data;
    });
  }
}
