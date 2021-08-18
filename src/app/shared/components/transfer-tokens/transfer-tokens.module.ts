import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferTokensDeskComponent } from './transfer-tokens-desk/transfer-tokens-desk.component';
import { TransferTokensMobileComponent } from './transfer-tokens-mobile/transfer-tokens-mobile.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [TransferTokensDeskComponent, TransferTokensMobileComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class TransferTokensModule { }
