import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { LoginRequest } from '../../models/request/login-request.model';
import { ResponseStatus } from '../../models/response/base-response.model';
import { TokenResponse } from '../../models/response/token-response.model';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/core/models/request/register-request.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser: Observable<User | null>;
  private currentUserSubject: BehaviorSubject<User | null>;

  constructor(private readonly apiService: ApiService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User | null>(
      JSON.parse(<string>sessionStorage.getItem('current_user'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentValue(): User | null {
    return this.currentUserSubject.value;
  }

  public async login(request: LoginRequest): Promise<ResponseStatus> {
    const LoginResponse = await this.apiService.login(request).toPromise();

    let status = LoginResponse!.status;

    if (status == ResponseStatus.Ok) {
      await this.setUserInfo(LoginResponse?.data!);
    }

    return status;
  }
  
  getUserType(): number | undefined {
    const currentUser = this.currentUserSubject.value;
    if (currentUser) {
      return currentUser.userType;
    }
    return undefined;
  }
  getCurrentUserId(): number | undefined {
    const currentUserId = this.currentUserSubject.value;
    if (currentUserId) {
      return currentUserId.id;
    }
    return undefined;
  }

  private async redirectToAppropriatePage(userType: number) {
    if (userType === 0) {
      await this.router.navigate(['../portal-layout/admin/dashboard']);
    } else if (userType === 1) {
      await this.router.navigate(['../portal-layout/employee/dashboard']);
    } else if (userType === 2) {
      await this.router.navigate(['../portal-layout/customer/dashboard']);
    }
  }
  async setUserInfo(token: TokenResponse) {
    this.setToken(token);

    const userProfileResponse = await this.apiService
      .getProfileInfo()
      .toPromise();

    let status = userProfileResponse?.status;

    const userProfile = userProfileResponse?.data;

    if (status == ResponseStatus.Ok && userProfile) {
      sessionStorage.setItem(
        'current_user',
        JSON.stringify(userProfileResponse!.data)
      );
      this.currentUserSubject.next(userProfileResponse!.data);
      this.redirectToAppropriatePage(userProfileResponse!.data.userType);
    } else {
      await this.logOut();
    }
  }

  public async register(request: RegisterRequest): Promise<ResponseStatus> {
    const registerResponse = await this.apiService
      .register(request)
      .toPromise();

    let status = registerResponse!.status;

    if (status == ResponseStatus.Ok) {
      this.setToken(registerResponse!.data);
      sessionStorage.setItem('current_user', JSON.stringify({}));
      this.currentUserSubject.next({} as User);
    }

    return status;
  }

  public async refreshToken(): Promise<boolean> {
    const refreshTokenResponse = await this.apiService
      .refreshToken(<string>sessionStorage.getItem('refresh_token'))
      .toPromise();

    if (refreshTokenResponse!.status == ResponseStatus.Ok) {
      this.setToken(refreshTokenResponse!.data); //
      return true;
    }
    return false;
  }

  private setToken(token: TokenResponse | null) {
    if (token != null) {
      sessionStorage.setItem('access_token', JSON.stringify(token.accessToken));
      sessionStorage.setItem(
        'token_expiration',
        JSON.stringify(token.expiration)
      );
      sessionStorage.setItem(
        'refresh_token',
        JSON.stringify(token.refreshToken)
      );
    }
  }

  async logOut() {
    sessionStorage.clear();
    this.currentUserSubject.next(null);
  }
}