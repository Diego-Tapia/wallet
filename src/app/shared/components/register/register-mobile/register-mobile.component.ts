import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterI } from '../models/register.interface';
import { ApiRegisterService } from '../services/api-register.service';

@Component({
  selector: 'app-register-mobile',
  templateUrl: './register-mobile.component.html',
  styleUrls: ['./register-mobile.component.sass']
})
export class RegisterMobileComponent implements OnInit {

  constructor(private apiregister: ApiRegisterService) { }
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
    email: new FormControl ('', [Validators.required, Validators.email])
});
  ngOnInit(): void {
  }
  register(form: RegisterI) {
    this.apiregister.onRegister(form).subscribe(data => {
      console.log(data);
    });
    console.log(form)
  }
}
