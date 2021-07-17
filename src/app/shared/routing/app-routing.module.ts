import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDeskComponent } from '../components/home/home-desk/home-desk.component';
import { MainLayoutComponent } from '../layout-components/main-layout/main-layout.component';
const routes: Routes = [
  {path: '', component: MainLayoutComponent,
    children:[
      {path:'', component: HomeDeskComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
