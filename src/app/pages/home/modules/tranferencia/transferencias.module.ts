import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferenciasRoutingModule } from './transferencias-routing.module';
import { TransferenciaComponent } from './transferencia.component';
import { FeaturesModule } from 'src/app/features/features.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TransferenciaComponent],
  imports: [
    CommonModule,
    TransferenciasRoutingModule,
    FeaturesModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class TransferenciasModule {}
