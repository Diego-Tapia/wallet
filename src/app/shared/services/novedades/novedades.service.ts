import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNovedades(): Observable<any> {
    return this.http.get<any>(`${this.url}/news`)
  }
}
