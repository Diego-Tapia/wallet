import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterI } from '../models/register.interface';
import { ResponseI } from '../../login/models/response.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiRegisterService {
  
  url:string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  onRegister(form: RegisterI): Observable<ResponseI> {
    let register = this.url + '/api/auth/register';
    return this.http.post<ResponseI>(register, form)
  }
}
