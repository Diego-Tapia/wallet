import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any> {
    return this.http.get<any>(`${this.url}/user`)
  }

  verifyUser(userIdentifier: string): Observable<any> {    
    return this.http.get<any>(`${this.url}/user-profile/verify-user/${userIdentifier}`)
  }
}
