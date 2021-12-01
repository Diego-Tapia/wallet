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
    path: 'wallet',
    component: HomeComponent,
    loadChildren: () =>
      import('./modules/wallet/wallet.module').then(
        (module) => module.WalletModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
