import { Injectable } from '@angular/core';
import { Campaign } from '../../models/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor() { }

  getCampaigns() : Campaign[] {
    return [
      { 'id': 1, 'name': 'teste 1'},
      { 'id': 2, 'name': 'teste 2'},
      { 'id': 3, 'name': 'teste 3'},
      { 'id': 4, 'name': 'teste 4'}
    ];
  }
}
