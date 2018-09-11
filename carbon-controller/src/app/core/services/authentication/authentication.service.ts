import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser: User = JSON.parse(localStorage.getItem('loggedUser'));
  userLogged: Boolean = JSON.parse(localStorage.getItem('userLogged')) || false;

  constructor() { }

  getUserData(login: string): User {
    const user = new User();

    user.login = login;
    user.name = 'Teste';

    return user;
  }

  authenticateUser(login: string, password: string): Boolean {
    this.loggedUser = this.getUserData(login);
    localStorage.setItem('loggedUser', JSON.stringify(this.userLogged));

    this.userLogged = true;
    localStorage.setItem('userLogged', JSON.stringify(this.userLogged));

    return true;
  }

  logout() {
    this.loggedUser = null;
    localStorage.removeItem('loggedUser');

    this.userLogged = false;
    localStorage.removeItem('userLogged');
  }
}
