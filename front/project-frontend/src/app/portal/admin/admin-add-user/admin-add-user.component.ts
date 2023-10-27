import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.scss'],
  providers: [MessageService],
})
export class AdminAddUserComponent {

  constructor(
    private authService: AuthService, 
    private apiService: ApiService,
    private messageService: MessageService) { }

  registrationSuccess: boolean = false;
  formData: any = { };
  options: { value: string, index: number }[] = ["Admin", "Personel", "Müşteri"]
    .map((value, index) => ({ value, index }));

  requestModel:RegisterRequest={
    fullName: this.formData.fullName,
    userName: this.formData.userName,
    email: this.formData.email,
    password: this.formData.password,
    userType: this.formData.userType
  }

  registerUser() {
    const registerRequestModel: RegisterRequest = {
      fullName: this.formData.fullName,
      userName: this.formData.userName,
      email: this.formData.email,
      password: this.formData.password,
      userType: this.formData.userType
    };

  console.log(registerRequestModel);
    this.authService.register(registerRequestModel).then((responseStatus) => {
      if (responseStatus === ResponseStatus.Ok) {
        this.showSuccessMessage("Başarıyla kayıt gerçekleştirildi.")
        console.log('Kullanıcı kaydedildi.');
        this.registrationSuccess = true;
        this.resetForm();
        setTimeout(() => {
          this.registrationSuccess = false;
        }, 5000);
      } else {
        console.error('Kullanıcı kaydedilemedi.');
      }
    })
    .catch((error) => {
      console.error('Bir hata oluştu: ' + error);
    });
  }

  resetForm() {
    this.formData = {};
  }

  private showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: message });
  }
}

