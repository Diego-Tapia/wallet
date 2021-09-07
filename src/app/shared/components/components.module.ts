import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ConfirmCodeModule } from './confirm-code/confirm-code.module';
import { RegisterModule } from './register/register.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    ConfirmCodeModule,
    RegisterModule,
    RouterModule
  ]
})
export class ComponentsModule { }
