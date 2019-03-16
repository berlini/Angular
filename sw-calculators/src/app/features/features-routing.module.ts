import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SixStarCalculatorComponent } from './six-star-calculator/six-star-calculator.component';
import { ExpCalculatorComponent } from './exp-calculator/exp-calculator.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'six-star-calculator', component: SixStarCalculatorComponent },
  { path: 'exp-calculator', component: ExpCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
