import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  public hide: boolean = true;
  constructor(private router: Router, private formBuilder: FormBuilder) { }
  myForm = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    dni: ['', [Validators.required]],
    cuil: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    repeat_password: ['', [Validators.required]],
  });

  ngOnInit(): void { }
  register() {
    if (!this.myForm.valid) {
      return console.log('ERROR');
    }
    console.log(this.myForm.value);
    this.router.navigate(['/home/inicio']);
  }
}
