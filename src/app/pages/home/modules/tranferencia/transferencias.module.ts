import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferenciasRoutingModule } from './transferencias-routing.module';
import { TransferenciaComponent } from './transferencia.component';

@NgModule({
  declarations: [TransferenciaComponent],
  imports: [CommonModule, TransferenciasRoutingModule],
})
export class TransferenciasModule {}
