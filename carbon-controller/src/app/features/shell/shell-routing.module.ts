import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellPageComponent } from './shell-page/shell-page.component';
import { ReportsPageComponent } from '../reports/reports-page/reports-page.component';
import { ReportPageComponent } from '../reports/report-page/report-page.component';
import { AuthGuardService } from '../../core/services/authentication/auth-guard.service';

const routes: Routes = [
  {
    path: 'shell',
    component: ShellPageComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'reports', component: ReportsPageComponent },
      { path: 'reports/:id', component: ReportPageComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
