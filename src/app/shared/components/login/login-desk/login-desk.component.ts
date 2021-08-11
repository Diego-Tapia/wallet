import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-login-desk',
  templateUrl: './login-desk.component.html',
  styleUrls: ['./login-desk.component.sass']
})
export class LoginDeskComponent implements OnInit {
  constructor() { }
  myForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
});
  login() {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }
  ngOnInit(): void {
  }

}
