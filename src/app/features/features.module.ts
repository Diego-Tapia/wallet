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
import { TransferenciaModalComponent } from './transferencia-modal/transferencia-modal.component';

@NgModule({
  declarations: [
    ListaActivosComponent,
    TitleComponent,
    SubtitleComponent,
    TablaMovimientosComponent,
    TransferenciaModalComponent,
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
  ],
  exports: [
    TitleComponent,
    SubtitleComponent,
    ListaActivosComponent,
    TablaMovimientosComponent,
  ],
})
export class FeaturesModule {}
