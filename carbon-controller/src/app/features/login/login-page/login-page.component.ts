import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login: string;
  password: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  userLogin() {
    console.log('clicou');
    
    let result : Boolean = this.authenticationService.authenticateUser(this.login, this.password);
    
    if(result) {
      this.router.navigate(['/campaings']);
    }

    console.log(result);
  }

}
