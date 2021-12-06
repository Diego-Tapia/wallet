import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { FeaturesModule } from 'src/app/features/features.module';
import localeEsAr from '@angular/common/locales/es-AR';
import { MatDividerModule } from '@angular/material/divider';
import { CardMovimientosComponent } from './components/card-movimientos/card-movimientos.component';
import { CardActivosComponent } from './components/card-activos/card-activos.component';
import { CardNovedadesComponent } from './components/card-novedades/card-novedades.component';

registerLocaleData(localeEsAr, 'es-Ar');

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
  providers: [{ provide: LOCALE_ID, useValue: 'es-Ar' }],
})
export class InicioModule {}
