import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA, MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Report } from 'src/app/core/models/report';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {

  reportData: Report;
  tableArray: any;
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.reportData = this.data.report;
    this.tableArray = this.data.report.data;
    this.displayedColumns = Object.getOwnPropertyNames(this.tableArray[0]);
   }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.tableArray);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
