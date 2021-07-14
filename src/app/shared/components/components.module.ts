import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDeskComponent } from './home/home-desk/home-desk.component';
import { HomeMobileComponent } from './home/home-mobile/home-mobile.component';
import { OperationDetailComponent } from './operation-detail/operation-detail.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'  



@NgModule({
  declarations: [
    HomeDeskComponent,
    HomeMobileComponent,
    CardComponent,
    OperationDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class ComponentsModule { }
