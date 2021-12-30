import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ListaActivosComponent } from './lista-activos/lista-activos.component';
import { TitleComponent } from './title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { TablaMovimientosComponent } from './tabla-movimientos/tabla-movimientos.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store';
import { featuresReducersMap } from './features.reducers.map';
import { GetMisActivosEffects } from './lista-activos/store/get-mis-activos.effects';
import { EffectsModule } from '@ngrx/effects';
import { GetTransactionsEffects } from './tabla-movimientos/store/get-transacciones.effects';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ModalTransferenciaComponent } from './modal-transferencia/modal-transferencia.component';
import { TransferenciaEffects } from './modal-transferencia/store/transferencia/transferencia.effects';
import { VerifyUserEffects } from './modal-transferencia/store/verify-user/verify-user.effects';

@NgModule({
  declarations: [
    ListaActivosComponent,
    TitleComponent,
    SubtitleComponent,
    TablaMovimientosComponent,
    ModalTransferenciaComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('featuresReducersMap', featuresReducersMap),
    EffectsModule.forFeature([GetMisActivosEffects, GetTransactionsEffects, TransferenciaEffects, VerifyUserEffects]),
  ],
  exports: [
    TitleComponent,
    SubtitleComponent,
    ListaActivosComponent,
    TablaMovimientosComponent,
  ],
})
export class FeaturesModule {}
