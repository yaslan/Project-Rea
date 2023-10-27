import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User, UserType } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';

@Component({
  selector: 'app-employee-user-list',
  templateUrl: './employee-user-list.component.html',
  styleUrls: ['./employee-user-list.component.scss'],
  providers: [MessageService],

})
export class EmployeeUserListComponent {

  constructor(
    private apiService: ApiService,
    private messageService: MessageService) {}


  users: User[] = [];

  usersProjectRole: User[] = [];

  ngOnInit() {
    this.apiService.getAllEntities(User).subscribe((userResult) => {
      this.users = userResult.data;
      this.usersProjectRole = userResult.data;
    });
    this.refresh();
  }

  findUserName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.fullName : '';
  }

  getAllRoles() {
    return this.usersProjectRole.filter((user) => {
      return this.usersProjectRole.filter((users) => users.userType === UserType.Employee || users.userType === UserType.Customer);
    });
  }

  private showErrorMessage(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Hata', detail: message });
  }

    createEntity<TEntity>(entity: TEntity, entityType: string) {
      return this.apiService.createEntity<TEntity>(entity, entityType);
    }


  refresh() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data;
      console.log(this.users);
    });
  }
}
