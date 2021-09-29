import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { ConfirmI } from '../../confirm-code/models/confirm.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  url:string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  onLogin(form: LoginI): Observable<ResponseI>{
    let direction = this.url + '/api/auth/login';
    return this.http.post<ResponseI>(direction, form);
  }
}
