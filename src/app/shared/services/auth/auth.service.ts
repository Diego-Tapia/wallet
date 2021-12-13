import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../../models/auth-response.interface';
import { IConfirmRegister } from '../../models/confirm-register.interface';
import { IRegister } from '../../models/register.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  register(registerForm: IRegister): Observable<any> {
    return this.http.post<IAuthResponse>(`${this.url}/auth/register`, registerForm);
  }

  confirm(confirmRegisterForm: IConfirmRegister): Observable<any> {
    return this.http.post<IAuthResponse>(`${this.url}/auth/confirm`, confirmRegisterForm);
  }

  logIn(username: string, password: string): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${this.url}/auth/login`, { username, password });
  }
}
