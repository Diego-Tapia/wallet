import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDeskComponent } from './home/home-desk/home-desk.component';
import { HomeMobileComponent } from './home/home-mobile/home-mobile.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    HomeDeskComponent,
    HomeMobileComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ComponentsModule { }
