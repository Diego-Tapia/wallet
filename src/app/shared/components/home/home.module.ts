import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDeskComponent } from './home-desk/home-desk.component';
import { HomeMobileComponent } from './home-mobile/home-mobile.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatInputModule} from '@angular/material/input'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [HomeDeskComponent, HomeMobileComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSidenavModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class HomeModule { }
