import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Transaction } from 'src/core/models/transaction.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-employee-transactions',
  templateUrl: './employee-transactions.component.html',
  styleUrls: ['./employee-transactions.component.scss'],
  providers: [MessageService],

})
export class EmployeeTransactionsComponent {

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
