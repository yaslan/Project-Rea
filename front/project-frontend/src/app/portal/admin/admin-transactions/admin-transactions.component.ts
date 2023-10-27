import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TransactionRequest } from 'src/core/models/request/transaction-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Transaction } from 'src/core/models/transaction.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-admin-transactions',
  templateUrl: './admin-transactions.component.html',
  styleUrls: ['./admin-transactions.component.scss'],
  providers: [MessageService],
})
export class AdminTransactionsComponent {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService) {}

  transactions: Transaction[] = [];
  users: User[] = [];
  
  ngOnInit() {
    this.apiService.getAllEntities(Transaction).subscribe((transactionResult) => {
      this.transactions = transactionResult.data;
    });
    this.apiService.getAllEntities(User).subscribe((userResult) => {
      this.users = userResult.data;
    });
  }

}
