import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser: User;
  userLogged: Boolean;

  constructor() { }

  getUserData(login: string): User {
    const user = new User();

    user.login = login;
    user.name = 'Teste';

    return user;
  }

  authenticateUser(login: string, password: string): Boolean {
    this.loggedUser = this.getUserData(login);
    this.userLogged = true;

    return true;
  }
}
