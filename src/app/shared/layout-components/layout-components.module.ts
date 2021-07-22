import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderDeskComponent } from './header-desk/header-desk.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { FooterDeskComponent } from './footer/footer-desk/footer-desk.component';
import { FooterMobileComponent } from './footer/footer-mobile/footer-mobile.component';
import { FooterBaseComponent } from './footer/footer-base/footer-base.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MatIconModule } from '@angular/material/icon';
import{MatToolbarModule} from'@angular/material/toolbar'

@NgModule({
  declarations: [
    HeaderDeskComponent,
    HeaderMobileComponent,
    FooterDeskComponent,
    FooterMobileComponent,
    FooterBaseComponent,
    MainLayoutComponent,
    MainHeaderComponent

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ]
})
export class LayoutComponentsModule { }
