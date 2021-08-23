import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfirmCodeDeskComponent } from './confirm-code-desk/confirm-code-desk.component';
import { ConfirmCodeMobileComponent } from './confirm-code-mobile/confirm-code-mobile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [ConfirmCodeDeskComponent, ConfirmCodeMobileComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ConfirmCodeModule { }
