import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidenavBarComponent } from './components/sidenav-bar/sidenav-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HomeComponent, SidenavBarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
  ],
  providers: [SidenavService],
})
export class HomeModule {}
