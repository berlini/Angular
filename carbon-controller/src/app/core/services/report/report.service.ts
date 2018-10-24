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
      {id: 1, name: 'Report 1', data: null},
      {id: 2, name: 'Report 2', data: null},
      {id: 3, name: 'Report 3', data: null},
      {id: 4, name: 'Report 4', data: null}
    ];
  }

  loadReport(report: Report) {
    this.activeReport = report;
  }

  getReport(id: number): Report {
    if (this.activeReport !== undefined) {
      return this.activeReport;
    } else {
      return {name : 'Report 1', id: 1, data: null};
    }
  }

  getReportData(reportId: number): Report {
    const report = this.getReport(reportId);

    report.data = [
      { column1: 'value11', column2: 'value12', column3: 'value13', column4: 'value14'},
      { column1: 'value21', column2: 'value22', column3: 'value23', column4: 'value24'},
      { column1: 'value31', column2: 'value32', column3: 'value33', column4: 'value34'},
      { column1: 'value41', column2: 'value42', column3: 'value43', column4: 'value44'},
      { column1: 'value51', column2: 'value52', column3: 'value53', column4: 'value54'},
      { column1: 'value61', column2: 'value62', column3: 'value63', column4: 'value64'}
    ];

    return report;
  }
}
