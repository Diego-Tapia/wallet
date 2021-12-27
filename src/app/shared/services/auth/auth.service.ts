import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../../models/auth-response.interface';
import { IConfirmRegister } from '../../models/confirm-register.interface';
import { IRegister } from '../../models/register.interface';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'localStorageData';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.apiUrl;

  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: StorageService,
    private http: HttpClient,
    private router: Router
  ) {}

  register(registerForm: IRegister): Observable<any> {   
    return this.http.post<IAuthResponse>(
      `${this.url}/auth/register`,
      registerForm
    );
  }

  confirm(confirmRegisterForm: IConfirmRegister): Observable<any> {
    return this.http.post<IAuthResponse>(
      `${this.url}/auth/confirm`,
      confirmRegisterForm
    );
  }

  logIn(username: string, password: string): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${this.url}/auth/login`, {
      username,
      password,
    });
  }

  logOut(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
      this.router.navigateByUrl('/auth/login');
    } catch (e) {
      console.log('Error cleaning localStorage', e);
    }
  }

  setUser(token: string, refreskToken: string, user: any): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
      const currentData = this.localStorage.get(STORAGE_KEY) || [];
      currentData.push({
        token: token,
        refreshToken: refreskToken,
        user: user,
      });
      this.localStorage.set(STORAGE_KEY, currentData);
      this.router.navigateByUrl('/home');
    } catch (e) {
      console.log('Error to save info into localStorage', e);
    }
  }

  verificarLocalStorage(): void {
    //TODO::Verificar si el local storage tiene datos de usuario
  }

  getUserData(): IAuthResponse | null {
    const storageData: IAuthResponse[] =
      this.localStorage.get(STORAGE_KEY) || null;
    return storageData ? storageData[0] : null;
  }
}
