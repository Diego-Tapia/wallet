import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleActivosComponent } from './components/detalle-activos/detalle-activos.component';
import { DetalleMovimientosComponent } from './components/detalle-movimientos/detalle-movimientos.component';
import { DetallePerfilComponent } from './components/detalle-perfil/detalle-perfil.component';

const routes: Routes = [
  { path: 'activos', component: DetalleActivosComponent },
  { path: 'movimientos', component: DetalleMovimientosComponent },
  { path: 'perfil', component: DetallePerfilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesGeneralesRoutingModule {}
