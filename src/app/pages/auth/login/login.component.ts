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
  myForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    //email: ['', [Validators.required, Validators.email]]
  });
  ngOnInit(): void {}
  login() {
    if (!this.myForm.valid) {
      return console.log('ERROR');
    }
    console.log(this.myForm.value);
    this.router.navigate(['/home/inicio']);
  }
}
