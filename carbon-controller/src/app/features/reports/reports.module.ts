import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ReportModalComponent } from './report-modal/report-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule
  ],
  declarations: [
    ReportsPageComponent,
    ReportModalComponent
  ],
  entryComponents: [
    ReportModalComponent
]
})
export class ReportsModule { }
