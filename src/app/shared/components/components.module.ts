import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDeskComponent } from './home/home-desk/home-desk.component';
import { HomeMobileComponent } from './home/home-mobile/home-mobile.component';



@NgModule({
  declarations: [
    HomeDeskComponent,
    HomeMobileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
