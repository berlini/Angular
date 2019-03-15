import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SixStarCalculatorComponent } from './six-star-calculator/six-star-calculator.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SixStarCalculatorComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ]
})
export class FeaturesModule { }
