import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
  styleUrls: ['./login-mobile.component.sass']
})
export class LoginMobileComponent implements OnInit {

  constructor() { }
  myForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
    Mail: new FormControl ('', [Validators.required, Validators.email])
});
  login() {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }
  ngOnInit(): void {
  }

}
