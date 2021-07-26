import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { CreditsModule } from './credits/credits.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    CreditsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
