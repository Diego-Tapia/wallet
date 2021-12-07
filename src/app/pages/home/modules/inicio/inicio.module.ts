import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { FeaturesModule } from 'src/app/features/features.module';
import { MatDividerModule } from '@angular/material/divider';
import { CardMovimientosComponent } from './components/card-movimientos/card-movimientos.component';
import { CardActivosComponent } from './components/card-activos/card-activos.component';
import { CardNovedadesComponent } from './components/card-novedades/card-novedades.component';

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
  ],
})
export class InicioModule {}
