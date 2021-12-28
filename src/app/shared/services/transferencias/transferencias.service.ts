import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../../models/api.interface';
import {
  ITransferenciaReq,
  ITransferenciaRes,
} from '../../models/transferencia.interface';

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitTransferencia(form: ITransferenciaReq): Observable<IApiResponse<ITransferenciaRes>> {
    return this.http.post<IApiResponse<ITransferenciaRes>>(`${this.url}/transaction`, form);
  }
}
