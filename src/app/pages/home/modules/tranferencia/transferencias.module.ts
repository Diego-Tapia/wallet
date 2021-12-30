import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferenciasRoutingModule } from './transferencias-routing.module';
import { TransferenciaComponent } from './transferencia.component';
import { FeaturesModule } from 'src/app/features/features.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TransferenciasReducerMap } from './transferencia-reducer.map';
import { GetMisActivosEffects } from 'src/app/features/lista-activos/store/get-mis-activos.effects';
import { TransferenciaEffects } from 'src/app/features/modal-transferencia/store/transferencia/transferencia.effects';
import { VerifyUserEffects } from 'src/app/features/modal-transferencia/store/verify-user/verify-user.effects';

@NgModule({
  declarations: [TransferenciaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TransferenciasRoutingModule,
    FeaturesModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatSelectModule,
    StoreModule.forFeature('TransferenciasReducerMap', TransferenciasReducerMap),
    EffectsModule.forFeature([TransferenciaEffects, GetMisActivosEffects, VerifyUserEffects]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TransferenciasModule {}
