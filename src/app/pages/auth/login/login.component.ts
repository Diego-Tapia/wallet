import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  constructor(private router: Router, private formBuilder: FormBuilder) {}
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
    // if (this.loginForm.valid) {
    // 	this.store.dispatch(setAuth({ username: this.username, password: this.password }));
    // }
  }

  //handleLogin(res: IState<IAuthResponse | null>): void {
  // if (res.success && res.response) {
  // 	this.authService.setUser(res.response.token, res.response.refreshToken, res.response.user);
  // } else if (res.error) {
  // 	this.noti.error('Error login', res.error.error?.message || '');
  // }
  // }
}
