import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDeskComponent } from './register-desk/register-desk.component';
import { RegisterMobileComponent } from './register-mobile/register-mobile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterDeskComponent, RegisterMobileComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class RegisterModule { }
