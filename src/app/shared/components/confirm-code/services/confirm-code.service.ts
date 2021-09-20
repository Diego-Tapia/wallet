import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmI } from '../models/confirm.interface';
import { ResponseI } from '../../login/models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConfirmCodeService {

  url:string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  onConfirm(form: ConfirmI): Observable<ResponseI>{
    let confirmateCode = this.url + '/auth/confirm';
    return this.http.post<ResponseI>(confirmateCode, form);
  }
}
