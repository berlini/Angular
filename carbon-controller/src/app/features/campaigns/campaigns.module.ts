import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignPageComponent } from './campaign-page/campaign-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CampaignsRoutingModule
  ],
  declarations: [CampaignPageComponent]
})
export class CampaignsModule { }
