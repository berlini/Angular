import { Component, OnInit } from '@angular/core';
import { Report } from '../../../core/models/report';
import { ReportService } from '../../../core/services/report/report.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ReportModalComponent } from '../report-modal/report-modal.component';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent implements OnInit {

  reports: Report[];
  selectedReport: number;

  formSelectReportGroup: FormGroup;
  formIntervalGroup: FormGroup;

  constructor(private reportService: ReportService, private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog) { }

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

  generateReport() {
    const selectedReportModel = this.reportService.getReportData(this.selectedReport);

    this.dialog.open(ReportModalComponent, { data: { report: selectedReportModel } });
  }

  downloadReportExcel() { }

  downloadReportPdf() { }

}
