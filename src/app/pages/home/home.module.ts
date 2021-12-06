import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [CommonModule, HomeRoutingModule, MatIconModule],
})
export class HomeModule {}
