import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiLoginService } from '../services/api-login.service';
import { LoginI } from '../models/login.interface';
@Component({
  selector: 'app-login-desk',
  templateUrl: './login-desk.component.html',
  styleUrls: ['./login-desk.component.sass']
})
export class LoginDeskComponent implements OnInit {
  constructor(
    private apiLogin: ApiLoginService,
  ) { }
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
    //email: new FormControl ('', [Validators.required, Validators.email])
});
  login(form: LoginI) {
    this.apiLogin.onLogin(form).subscribe(data => {
      console.log(data);
    });
    console.log(form)
  }
  ngOnInit(): void {
  }

}
