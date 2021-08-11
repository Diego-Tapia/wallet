import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout-components/main-layout/main-layout.component';
import { HomeDeskComponent } from '../components/home/home-desk/home-desk.component';
import { CreditDeskComponent } from '../components/credits/credit-desk/credit-desk.component';
import { LoginDeskComponent } from '../components/login/login-desk/login-desk.component';
const routes: Routes = [
  {path: '', component: MainLayoutComponent,
    children:[
      {path:'', component: HomeDeskComponent},  
    ]},
    {
      path: 'login', component: LoginDeskComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
