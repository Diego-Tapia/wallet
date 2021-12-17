import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { FeaturesModule } from 'src/app/features/features.module';
import { MatDividerModule } from '@angular/material/divider';
import { CardMovimientosComponent } from './components/card-movimientos/card-movimientos.component';
import { CardActivosComponent } from './components/card-activos/card-activos.component';
import { CardNovedadesComponent } from './components/card-novedades/card-novedades.component';
import { inicioReducersMap } from './inicio.reducers.map';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GetNovedadesEffects } from './components/card-novedades/store/get-novedades.effects';

@NgModule({
  declarations: [
    InicioComponent,
    CardMovimientosComponent,
    CardActivosComponent,
    CardNovedadesComponent,
  ],
  imports: [
    FeaturesModule,
    CommonModule,
    InicioRoutingModule,
    MatDividerModule,
    StoreModule.forFeature('inicioReducersMap', inicioReducersMap),
    EffectsModule.forFeature([GetNovedadesEffects])
  ],
})
export class InicioModule { }
