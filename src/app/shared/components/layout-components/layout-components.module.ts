import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderBaseComponent } from '../layout-components/main-header/header-base/header-base.component';
import { HeaderDeskComponent } from '../layout-components/main-header/header-desk/header-desk.component';
import { HeaderMobileComponent } from '../layout-components/main-header/header-mobile/header-mobile.component';
import { FooterDeskComponent } from '../layout-components/footer/footer-desk/footer-desk.component';
import { FooterMobileComponent } from '../layout-components/footer/footer-mobile/footer-mobile.component';
import { FooterBaseComponent } from '../layout-components/footer/footer-base/footer-base.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MatIconModule } from '@angular/material/icon';
import{MatToolbarModule} from'@angular/material/toolbar'

@NgModule({
  declarations: [
    HeaderBaseComponent,
    HeaderDeskComponent,
    HeaderMobileComponent,
    FooterDeskComponent,
    FooterMobileComponent,
    FooterBaseComponent,
    MainLayoutComponent

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ]
})
export class LayoutComponentsModule { }
