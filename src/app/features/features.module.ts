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
import { GetActivosEffects } from './lista-activos/store/activos.effects';
import { GetActivosByIdEffects } from './lista-activos/store/activos-by-id.effects';
import { EffectsModule } from '@ngrx/effects';
import { GetTransactionsEffects } from './tabla-movimientos/store/get-transacciones.effects';

@NgModule({
  declarations: [
    ListaActivosComponent,
    TitleComponent,
    SubtitleComponent,
    TablaMovimientosComponent,
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
    StoreModule.forFeature('featuresReducersMap', featuresReducersMap),
    EffectsModule.forFeature([GetActivosEffects, GetActivosByIdEffects, GetTransactionsEffects]),
  ],
  exports: [
    TitleComponent,
    SubtitleComponent,
    ListaActivosComponent,
    TablaMovimientosComponent,
  ],
})
export class FeaturesModule {}
