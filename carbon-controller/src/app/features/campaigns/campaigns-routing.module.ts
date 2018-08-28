import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignPageComponent } from './campaign-page/campaign-page.component';
import { AuthGuardService } from '../../core/services/authentication/auth-guard.service';

const routes: Routes = [
  { path: 'campaings', component: CampaignPageComponent, pathMatch: 'full', canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
