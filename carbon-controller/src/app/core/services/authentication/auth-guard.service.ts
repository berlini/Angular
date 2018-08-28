import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate() {
    if (this.authenticationService.userLogged) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
