import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignPageComponent } from './campaign-page/campaign-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ShellModule } from '../shell/shell.module';

@NgModule({
  imports: [
    CommonModule,
    ShellModule,
    SharedModule,
    CampaignsRoutingModule
  ],
  declarations: [CampaignPageComponent]
})
export class CampaignsModule { }
