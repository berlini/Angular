import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userName: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userName = this.authenticationService.loggedUser.name;
  }

}
