import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegisterI } from '../models/register.interface';
import { ApiRegisterService } from '../services/api-register.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-register-desk',
  templateUrl: './register-desk.component.html',
  styleUrls: ['./register-desk.component.sass']
})
export class RegisterDeskComponent implements OnInit {
  isEditable = false;
  constructor( 
    private apiregister: ApiRegisterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    //private _formBuilder: FormBuilder
    ) { }

    firstFormGroup = new FormGroup({
      shortName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      dni: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      cuil: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      //dateOfBirth: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
    secondFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      username: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]),
      //confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });

    ngOnInit(): void {
  }
  register(form: RegisterI) {
    this.apiregister.onRegister(form)
    .subscribe(
      data => data,
      error => {
        if(error.status === 201){
          this.router.navigate(['/'])
        }if(error.status === 500){
          this.router.navigate(['/confirm'])
        }
        console.log(form)
      }
    )
  }
  
}
