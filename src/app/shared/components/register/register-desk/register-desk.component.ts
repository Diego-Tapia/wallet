import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterI } from '../models/register.interface';
import { ApiRegisterService } from '../services/api-register.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-register-desk',
  templateUrl: './register-desk.component.html',
  styleUrls: ['./register-desk.component.sass']
})
export class RegisterDeskComponent implements OnInit {

  constructor( 
    private apiregister: ApiRegisterService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
    email: new FormControl ('', [Validators.required, Validators.email])
});
  ngOnInit(): void {
  }
  register(form: RegisterI) {
    this.apiregister.onRegister(form)
    .subscribe(
      data => data,
      error => {
        if(error.status === 201){
          this.router.navigate(['/']);
        }if(error.status === 500){
          this.router.navigate(['/confirm'])
        }
      }
      )
  }  
}
