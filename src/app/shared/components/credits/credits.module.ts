import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditDeskComponent } from './credit-desk/credit-desk.component';
import { CreditMobileComponent } from './credit-mobile/credit-mobile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CreditDeskComponent, CreditMobileComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CreditsModule { }
