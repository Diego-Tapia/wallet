import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { RegisterI } from '../models/register.interface';
import { ApiRegisterService } from '../services/api-register.service';

@Component({
  selector: 'app-register-mobile',
  templateUrl: './register-mobile.component.html',
  styleUrls: ['./register-mobile.component.sass']
})
export class RegisterMobileComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = false;

  constructor(private apiregister: ApiRegisterService,
              private _formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      dni: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      cuil: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      dateOfBirth: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    });
    this.secondFormGroup = this._formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      username: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    });
  }
  /*register(form: RegisterI) {
    this.apiregister.onRegister(form).subscribe(data => {
      console.log(data);
    });
    console.log(form)
  }*/
}
