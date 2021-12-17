import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesGeneralesRoutingModule } from './detalles-generales-routing.module';
import { DetalleActivosComponent } from './components/detalle-activos/detalle-activos.component';
import { DetalleMovimientosComponent } from './components/detalle-movimientos/detalle-movimientos.component';
import { DetallePerfilComponent } from './components/detalle-perfil/detalle-perfil.component';
import { FeaturesModule } from 'src/app/features/features.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { detallesGeneralesReducersMap } from './det-generales.reducers.map';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GetUsuarioEffects } from './components/detalle-perfil/store/get-usuario.effects';

@NgModule({
  declarations: [
    DetalleActivosComponent,
    DetalleMovimientosComponent,
    DetallePerfilComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    DetallesGeneralesRoutingModule,
    FeaturesModule,
    StoreModule.forFeature('detallesGeneralesReducersMap', detallesGeneralesReducersMap),
    EffectsModule.forFeature([GetUsuarioEffects])
  ],
})
export class DetallesGeneralesModule { }
