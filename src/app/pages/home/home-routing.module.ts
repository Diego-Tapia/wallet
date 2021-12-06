import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
  {
    path: 'inicio',
    component: HomeComponent,
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then(
        (module) => module.InicioModule
      ),
  },
  {
    path: 'transferencia',
    component: HomeComponent,
    loadChildren: () =>
      import('./modules/tranferencia/transferencias.module').then(
        (module) => module.TransferenciasModule
      ),
  },
  {
    path: 'detalles',
    loadChildren: () =>
      import('./modules/detalles-generales/detalles-generales.module').then(
        (m) => m.DetallesGeneralesModule
      ),
  },
  {
    path: 'help',
    component: HomeComponent,
    loadChildren: () =>
      import('./modules/help/help.module').then((module) => module.HelpModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
