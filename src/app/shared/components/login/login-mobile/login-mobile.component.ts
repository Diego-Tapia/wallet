import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiLoginService } from '../services/api-login.service';
import { LoginI } from '../models/login.interface';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
  styleUrls: ['./login-mobile.component.sass']
})
export class LoginMobileComponent implements OnInit {

  constructor(private apiLogin: ApiLoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
    //email: new FormControl ('', [Validators.required, Validators.email])
});
login(form: LoginI) {
  this.apiLogin.onLogin(form).subscribe(data =>{
    this.router.navigate(['/home']);
    console.log(data);
  });
}
  ngOnInit(): void {
  }

}
