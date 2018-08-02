import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser: User;

  constructor() { }

  getUserData(login: string): User {
    return new User();
  }

  authenticateUser(login: string, password: string): Boolean {
    return true;
  }
}
