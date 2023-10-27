import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TransactionRequest } from 'src/core/models/request/transaction-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Transaction } from 'src/core/models/transaction.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.component.html',
  styleUrls: ['./customer-transaction.component.scss'],
  providers: [MessageService],

})
export class CustomerTransactionComponent {
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
