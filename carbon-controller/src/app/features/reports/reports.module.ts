import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ReportPageComponent } from './report-page/report-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule
  ],
  declarations: [ReportsPageComponent, ReportPageComponent]
})
export class ReportsModule { }
