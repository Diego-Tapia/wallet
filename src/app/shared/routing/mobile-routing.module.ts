import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMobileComponent } from '../components/home/home-mobile/home-mobile.component';
import { MainLayoutComponent } from '../layout-components/main-layout/main-layout.component';

const routesMobile: Routes = [
{path: '', component: MainLayoutComponent, 
  children:[
    {path:'', component: HomeMobileComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routesMobile)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
