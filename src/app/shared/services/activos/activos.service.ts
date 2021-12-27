import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IActivo } from '../../models/activo.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getActivos(): Observable<IActivo[]> {
    return this.http.get<IActivo[]>(`${this.url}/wallet`)
  }

  getActivosById(id: string): Observable<IActivo> {
    return this.http.get<IActivo>(`${this.url}/token/${id}`)
  }
}
