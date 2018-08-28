import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Report } from '../../../core/models/report';
import { ReportService } from '../../../core/services/report/report.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  public report: Report;
  public beginDate: Date;
  public endDate: Date;

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit() {
    const id = this.route.paramMap.pipe(switchMap((params: ParamMap) => params.get('id')));
    this.report = this.reportService.getReport(Number(id));
  }

  generateReport() { }

  downloadReportExcel() { }

  downloadReportPdf() { }

}
