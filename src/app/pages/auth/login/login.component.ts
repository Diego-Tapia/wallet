import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ILoginResponse } from 'src/app/shared/models/login.interface';
import { IState } from 'src/app/shared/models/state.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { setLogin } from './store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  subscriptions: Subscription[] = [];
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private store: Store<{ setAuthReducer: IState<ILoginResponse> }>
  ) {
    this.subscriptions.push(
      this.store
        .select('setAuthReducer')
        .subscribe((res: IState<ILoginResponse | null>) => {
          this.handleLogin(res);
        })
    );
  }

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    //email: ['', [Validators.required, Validators.email]]
  });
  ngOnInit(): void {}

  get username(): string {
    return this.loginForm.get('username')?.value;
  }

  get password(): string {
    return this.loginForm.get('password')?.value;
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(
        setLogin({ username: this.username, password: this.password })
      );
    }
  }

  handleLogin(res: IState<ILoginResponse | null>): void {
    if (res.success && res.response) {
      this.authService.setUser(
        res.response.token,
        res.response.refreshToken,
        res.response.user
      );
    } else if (res.error) {
      console.log(res.error);
      // this.noti.error('Error login', res.error.error?.message || '');
    }
  }
}
