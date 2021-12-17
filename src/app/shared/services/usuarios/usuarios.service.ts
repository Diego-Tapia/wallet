import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/user`)
  }
}
