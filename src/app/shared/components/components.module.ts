import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDeskComponent } from './home/home-desk/home-desk.component';
import { HomeMobileComponent } from './home/home-mobile/home-mobile.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomeDeskComponent,
    HomeMobileComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class ComponentsModule { }
