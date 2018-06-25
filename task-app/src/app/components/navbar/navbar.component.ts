import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imgBrandPath: string;
  homePath: string;
  createTaskPath: string;
  historicPath: string;

  constructor() { 
    this.imgBrandPath = 'assets/images/navbar-icon.png';
    this.homePath = '#';
    this.createTaskPath = '#';
    this.historicPath = '#';
  }

  ngOnInit() {
  }

}
