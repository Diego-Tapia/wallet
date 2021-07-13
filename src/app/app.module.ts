import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeDeskComponent } from '../app/shared/components/home/home-desk/home-desk.component';
import { HomeMobileComponent } from '../app/shared/components/home/home-mobile/home-mobile.component';
import { LayoutComponentsModule } from './shared/components/layout-components/layout-components.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeDeskComponent,
    HomeMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
