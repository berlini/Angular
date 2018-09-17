import { Injectable } from '@angular/core';
import { Report } from '../../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  public activeReport: Report;

  constructor() { }

  getReports(): Report[] {
    return [
      {'id': 1, 'name': 'Report 1', 'headers': null, 'rows': null},
      {'id': 2, 'name': 'Report 2', 'headers': null, 'rows': null},
      {'id': 3, 'name': 'Report 3', 'headers': null, 'rows': null},
      {'id': 4, 'name': 'Report 4', 'headers': null, 'rows': null}
    ];
  }

  loadReport(report: Report) {
    this.activeReport = report;
  }

  getReport(id: number): Report {
    if (this.activeReport !== undefined) {
      return this.activeReport;
    } else {
      return {'name' : 'Report 1', 'id': 1, 'headers': null, 'rows': null};
    }
  }
}
