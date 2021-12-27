import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { IState } from 'src/app/shared/models/state.interface';
import { IAuthReducerMap } from '../auth-reducers.map';
import { setRegister, setRegisterClear } from './store/register.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public hide: boolean = true;
  subscriptions: Subscription[] = [];

  constructor(
    private noti: NotificationsService,
    private formBuilder: FormBuilder,
    private store: Store<{ authRedecuersMap: IAuthReducerMap }>
  ) {
    this.subscriptions.push(
      this.store
        .select('authRedecuersMap', 'setRegister').subscribe((res: IState<any>) => {this.handleRegister(res);})
    );
  }

  myForm = this.formBuilder.group({
    shortName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    dni: ['', [Validators.required]],
    cuil: ['', [Validators.required]],
    birthOfDate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    repeat_password: ['', [Validators.required]],
    avatarUrl: ['avatarUrl'],
    customId: ['customId'],
    clientId: ['61b89a0e069f26180c0f60bd']
  });

  

  ngOnInit(): void { }

  ngOnDestroy(): void { 
    this.store.dispatch(setRegisterClear());
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
  
  handleRegister(res: IState<any>): void {
    if(res.error) this.noti.error('Error', res.error.error.message)
    if(res.success) this.noti.success('Éxito', 'El usuario se creó satisfactoriamente')
  }

  register() {
    const { password, repeat_password } = this.myForm.value
    if (!this.myForm.valid) return this.noti.error('Error', 'Hay errores o faltan datos en el formulario de registro');
    if (password !== repeat_password) return this.noti.error('Error', 'Las contraseñas no coinciden');    
    return this.store.dispatch(setRegister({form: this.myForm.value}));
  }
}
