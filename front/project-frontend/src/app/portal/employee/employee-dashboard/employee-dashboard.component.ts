import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Account } from 'src/core/models/account.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Transaction } from 'src/core/models/transaction.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
  providers: [MessageService],
})
export class EmployeeDashboardComponent {

  
  constructor(private authService: AuthService, 
    private apiService: ApiService,
    private messageService: MessageService) { }

  totalUserCount:number = 0;
  totalAccountCount:number = 0;
  totalTransactionCount:number = 0;

  ngOnInit(): void {
    this.getUserCount();
    this.getAccountCount();
    this.getTransactionCount();
  }

  async getUserCount() {
    try {
      const entityType = User;
      const response = await this.apiService.getAllEntities(entityType).toPromise();
      if (response?.status === ResponseStatus.Ok) {
        this.totalUserCount = response.data.length;
      } else {
        console.error('Veri sayısı alınamadı:', ResponseStatus.Error);
      }
    } catch (error) {
      console.error('Veri sayısı alınamadı:', error);
    }
  }

  async getAccountCount() {
    try {
      const entityType = Account;
      const response = await this.apiService.getAllEntities(entityType).toPromise();
      if (response?.status === ResponseStatus.Ok) {
        this.totalAccountCount = response.data.length;
      } else {
        console.error('Veri sayısı alınamadı:', ResponseStatus.Error);
      }
    } catch (error) {
      console.error('Veri sayısı alınamadı:', error);
    }
  }

  async getTransactionCount() {
    try {
      const entityType = Transaction;
      const response = await this.apiService.getAllEntities(entityType).toPromise();
      if (response?.status === ResponseStatus.Ok) {
        this.totalTransactionCount = response.data.length;
      } else {
        console.error('Veri sayısı alınamadı:', ResponseStatus.Error);
      }
    } catch (error) {
      console.error('Veri sayısı alınamadı:', error);
    }
  }
}
