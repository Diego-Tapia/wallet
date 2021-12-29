import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { IState } from 'src/app/shared/models/state.interface';
import { IAuthReducerMap } from '../auth-reducers.map';
import { setConfirmRegister, setConfirmRegisterClear } from './store/confirm-user/confirm-register.actions';
import { setRegister, setRegisterClear } from './store/register.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public isLinear: boolean = true;
  public hide: boolean = true;
  subscriptions: Subscription[] = [];

  constructor(
    private noti: NotificationsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<{ authRedecuersMap: IAuthReducerMap }>
  ) {
    this.subscriptions.push(
      this.store.select('authRedecuersMap', 'setRegister').subscribe((res: IState<any>) => {this.handleRegister(res);})
    ),
    this.subscriptions.push(
      this.store.select('authRedecuersMap', 'setConfirmRegister').subscribe((res: IState<any>) => {this.handleConfirmRegister(res);})
    )
  }

  @ViewChild('stepper') private stepper!: MatStepper;

  firstRegisterForm = this.formBuilder.group({
    shortName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    dni: ['', [Validators.required]],
    cuil: ['', [Validators.required]],
    birthOfDate: ['', [Validators.required]]
  })

  secondRegisterForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    repeat_password: ['', [Validators.required]],
    avatarUrl: ['avatarUrl'],
    customId: ['customId'],
    clientId: ['61b89a0e069f26180c0f60bd']
  });

  confirmForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    confirmCode: ['', [Validators.required]],
  })

  

  ngOnInit(): void { }

  ngOnDestroy(): void { 
    this.store.dispatch(setRegisterClear());
    this.store.dispatch(setConfirmRegisterClear());
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  confirmStep(){
    this.isLinear = false;
    setTimeout(() => {
      this.stepper.next()
      this.stepper.next()
    }, 10);
  }
  
  backRegister(){
    this.isLinear = true;
    this.stepper.reset();
  }
  
  handleRegister(res: IState<any>): void {
    if(res.error) this.noti.error('Error', res.error.error.message);
    if(res.success) {
      this.noti.success('Éxito', 'El usuario se creó satisfactoriamente');
      this.stepper.next();
    } 
  }

  handleConfirmRegister(res: IState<any>): void {
    if(res.error) this.noti.error('Error', res.error.error.message)
    if(res.success) {
      this.noti.success('Éxito', 'El usuario se confirmó satisfactoriamente')
      this.router.navigate(['/auth/login'])
    } 
  }

  register() {
    const { password, repeat_password } = this.secondRegisterForm.value
    if (!this.firstRegisterForm.valid || !this.secondRegisterForm.valid) return this.noti.error('Error', 'Hay errores o faltan datos en el formulario de registro');
    if (password !== repeat_password) return this.noti.error('Error', 'Las contraseñas no coinciden');

    const formJoin = {...this.firstRegisterForm.value , ...this.secondRegisterForm.value}   
    return this.store.dispatch(setRegister({form: formJoin}));
  }

  confirmRegister() {
    if (!this.confirmForm.valid) return this.noti.error('Error', 'Hay errores o faltan datos en el formulario de registro');
    return this.store.dispatch(setConfirmRegister({form: this.confirmForm.value}));
  }
}
