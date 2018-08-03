import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { isNullOrUndefined } from 'util';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login: string;
  password: string;
  private error: boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  userLogin() {
    if (!isNullOrUndefined(this.login) && !isNullOrUndefined(this.password) && this.login !== '' && this.password !== '') {
      const result: Boolean = this.authenticationService.authenticateUser(this.login, this.password);

      if (result) {
        this.error = false;
        this.router.navigate(['/campaings']);
      } else {
        this.error = true;
      }
    } else {
      this.error = true;
    }

    if (this.error) {
      this.snackBar.open('Login ou senha incorretos', '', {duration: 1000});
    }
  }

}
