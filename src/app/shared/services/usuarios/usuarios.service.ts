import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserProfile } from '../../models/user-profile.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any> {
    return this.http.get<any>(`${this.url}/user`)
  }

  verifyUser(userIdentifier: string): Observable<IUserProfile> {    
    return this.http.get<any>(`${this.url}/user/verify-user/${userIdentifier}`)
  }
}
