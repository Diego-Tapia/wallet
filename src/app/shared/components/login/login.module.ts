import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginDeskComponent } from './login-desk/login-desk.component';
import { LoginMobileComponent } from './login-mobile/login-mobile.component';

@NgModule({
  declarations: [LoginDeskComponent, LoginMobileComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class LoginModule { }
