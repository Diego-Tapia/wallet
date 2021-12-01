import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // {
  // 	path: 'auth',
  // 	loadChildren: () => import('./pages/auth/auth.module').then((module) => module.AuthModule)
  // },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((module) => module.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
