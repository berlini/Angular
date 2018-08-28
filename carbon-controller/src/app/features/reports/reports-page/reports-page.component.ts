import { Component, OnInit } from '@angular/core';
import { Report } from '../../../core/models/report';
import { ReportService } from '../../../core/services/report/report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent implements OnInit {

  public reports: Report[];

  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit() {
    this.reports = this.reportService.getReports();
  }

  loadReport(report: Report) {
    this.reportService.loadReport(report);

    this.router.navigate(['shell/reports/' + report.id]);
  }

}
