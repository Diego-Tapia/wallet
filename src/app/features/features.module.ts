import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, FeaturesRoutingModule],
  exports: [TitleComponent],
})
export class FeaturesModule {}
