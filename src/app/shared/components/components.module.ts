import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { CreditsModule } from './credits/credits.module';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    CreditsModule,
    LoginModule,
    RouterModule
  ]
})
export class ComponentsModule { }
