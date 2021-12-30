import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { FeaturesModule } from '../../../../features/features.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    HelpRoutingModule,
    FeaturesModule,
    MatExpansionModule,
    MatDividerModule,
    FeaturesModule,
  ],
})
export class HelpModule {}
