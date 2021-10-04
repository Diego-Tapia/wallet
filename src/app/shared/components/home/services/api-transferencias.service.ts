import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfer';
import { ResponseI } from '../../login/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiTransferenciasService {

  url:string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  onTransfer(form: Transfer): Observable<ResponseI>{
    let balance = this.url + '/api/transaction';
    return this.http.post<ResponseI>(balance, form)
  }
}
