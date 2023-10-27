import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  userType: number | undefined; 

  constructor(private authService: AuthService) {
    this.userType = this.authService.getUserType(); // Kullanıcı türünü alın
  }
}
