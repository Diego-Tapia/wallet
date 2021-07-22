import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLayoutComponent } from '../components/home/home-layout/home-layout.component';
import { MainLayoutComponent } from '../layout-components/main-layout/main-layout.component';
const routes: Routes = [
  {path: '', component: MainLayoutComponent,
    children:[
      {path:'', component: HomeLayoutComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
