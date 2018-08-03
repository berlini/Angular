import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { CampaignService } from '../../../core/services/campaign/campaign.service';
import { Campaign } from '../../../core/models/campaign';

@Component({
  selector: 'app-campaign-page',
  templateUrl: './campaign-page.component.html',
  styleUrls: ['./campaign-page.component.css']
})
export class CampaignPageComponent implements OnInit {

  campaigns: Campaign[];

  constructor(private router: Router, private campaignService: CampaignService) { }

  ngOnInit() {
    this.campaigns = this.campaignService.getCampaigns();
  }

  loadCampaign(campaign: Campaign) {
    this.campaignService.loadCampaign(campaign);

    this.router.navigate(['/shell']);
  }

}
