import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '../components/card/card.component';
import { OperationDetailComponent } from '../components/operation-detail/operation-detail.component';
import { MainLayoutComponent } from '../layout-components/main-layout/main-layout.component';
const routes: Routes = [
  {path: '', component: MainLayoutComponent,
    children:[
      {path:'', component: CardComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
