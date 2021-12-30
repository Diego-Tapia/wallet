import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IActivo } from '../../models/activo.interface';
import { IApiResponse } from '../../models/api.interface';
import { IWallet } from '../../models/wallet.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMisActivos(): Observable<IApiResponse<IWallet>> {
    return this.http.get<IApiResponse<IWallet>>(`${this.url}/wallet`)
  }
}
