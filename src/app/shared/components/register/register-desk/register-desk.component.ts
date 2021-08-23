import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterI } from '../models/register.interface';
import { ApiRegisterService } from '../services/api-register.service';
@Component({
  selector: 'app-register-desk',
  templateUrl: './register-desk.component.html',
  styleUrls: ['./register-desk.component.sass']
})
export class RegisterDeskComponent implements OnInit {

  constructor( private apiregister: ApiRegisterService) { }
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
