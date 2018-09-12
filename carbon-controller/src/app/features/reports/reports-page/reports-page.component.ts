import { Component, OnInit } from '@angular/core';
import { Report } from '../../../core/models/report';
import { ReportService } from '../../../core/services/report/report.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent implements OnInit {

  reports: Report[];
  selectedReport: string;

  formSelectReportGroup: FormGroup;
  formIntervalGroup: FormGroup;

  constructor(private reportService: ReportService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reports = this.reportService.getReports();

    this.formSelectReportGroup = this.formBuilder.group({
      reportControl: ['', Validators.required]
    });

    this.formIntervalGroup = this.formBuilder.group({
      startDateControl: ['', Validators.required],
      endDateControl: ['', Validators.required]
    });
  }

  generateReport() { }

  downloadReportExcel() { }

  downloadReportPdf() { }

}
