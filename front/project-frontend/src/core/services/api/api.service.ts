import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, map, share } from 'rxjs';

import { environment } from 'src/environments/environment';
import { BaseDataResponse } from '../../models/response/base-data-response.model';
import { TokenResponse } from '../../models/response/token-response.model';
import { LoginRequest } from '../../models/request/login-request.model';
import { RegisterRequest } from '../../models/request/register-request.model';
import { User } from '../../models/user.model';
import { BaseResponse } from 'src/core/models/response/base-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = environment.api_url; 

  constructor(private readonly http: HttpClient) {} 

  login(request: LoginRequest): Observable<BaseDataResponse<TokenResponse>> {
    return this.http
      .post<BaseDataResponse<TokenResponse>>( 
        this.endpoint + '/Auth/Login',
        request
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  register(
    request: RegisterRequest
  ): Observable<BaseDataResponse<TokenResponse>> {
    return this.http
      .post<BaseDataResponse<TokenResponse>>(
        this.endpoint + '/Auth/Register',
        request
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getEntityById<TEntity>(id: number, entityType: Type<TEntity>) {
    return this.http
      .get<BaseDataResponse<TEntity>>(
        `${environment.api_url}/${entityType.name}/GetById/${id}`
      )
      .pipe(share())
      .toPromise();
  }

  createEntity<TEntity>(entity: TEntity, entityType: string) {
    return this.http
      .post<BaseDataResponse<TEntity[]>>(
        environment.api_url + '/' + entityType + '/Create',
        entity
      )
      .pipe(share())
      .toPromise();
  }

  deleteEntity<TEntity>(id: number, entityType: Type<TEntity>) {
    return this.http
      .delete<BaseResponse>(
        environment.api_url + '/' + entityType.name + '/Delete/' + id
      )
      .pipe(share())
      .toPromise();
  }

  updateEntity<TEntity>(
    id: number,
    newEntity: TEntity,
    entityType: Type<TEntity>
  ) {
    return this.http
      .put<BaseDataResponse<TEntity[]>>(
        environment.api_url + '/' + entityType.name + '/Update/' + id,
        newEntity
      )
      .pipe(share())
      .toPromise();
  }

  getProfileInfo(): Observable<BaseDataResponse<User>> {
    return this.http
      .get<BaseDataResponse<User>>(this.endpoint + '/Auth/GetProfileInfo')
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  refreshToken(token: string): Observable<BaseDataResponse<TokenResponse>> {
    return this.http
      .get<BaseDataResponse<TokenResponse>>(
        this.endpoint + '/Auth/RefreshToken',
        { params: new HttpParams().append('token', token) }
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getAllEntities<TEntity>(entityType: Type<TEntity>) {
    return this.http
      .request<BaseDataResponse<TEntity[]>>(
        'get',
        environment.api_url + '/' + entityType.name + '/GetAll'
      )
      .pipe(share());
  }

}
