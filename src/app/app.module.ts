import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderBaseComponent } from '../app/shared/components/header/header-base/header-base.component';
import { HeaderDeskComponent } from '../app/shared/components/header/header-desk/header-desk.component';
import { HeaderMobileComponent } from './shared/components/header/header-mobile/header-mobile.component';
import { FooterDeskComponent } from './shared/components/footer/footer-desk/footer-desk.component';
import { FooterMobileComponent } from './shared/components/footer/footer-mobile/footer-mobile.component';
import { FooterBaseComponent } from './shared/components/footer/footer-base/footer-base.component';
import { HomeDeskComponent } from './shared/components/home/home-desk/home-desk.component';
import { HomeMobileComponent } from './shared/components/home/home-mobile/home-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBaseComponent,
    HeaderDeskComponent,
    HeaderMobileComponent,
    FooterDeskComponent,
    FooterBaseComponent,
    FooterMobileComponent,
    HomeDeskComponent,
    HomeMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
