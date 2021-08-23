import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout-components/main-layout/main-layout.component';
import { HomeDeskComponent } from '../components/home/home-desk/home-desk.component';
import { CreditDeskComponent } from '../components/credits/credit-desk/credit-desk.component';
import { LoginDeskComponent } from '../components/login/login-desk/login-desk.component';
import { RegisterDeskComponent } from '../components/register/register-desk/register-desk.component';
import { ConfirmCodeDeskComponent } from '../components/confirm-code/confirm-code-desk/confirm-code-desk.component';
const routes: Routes = [
  {
    path: '', component: LoginDeskComponent, 
  },
  {path: 'register', component: RegisterDeskComponent},
  {path: 'confirm', component: ConfirmCodeDeskComponent},
  {path: '', component: MainLayoutComponent,
    children:[
      {path:'home', component: HomeDeskComponent},  
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
