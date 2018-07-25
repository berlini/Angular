import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignPageComponent } from './campaign-page/campaign-page.component';

const routes: Routes = [
  { path: 'campaings', component: CampaignPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
