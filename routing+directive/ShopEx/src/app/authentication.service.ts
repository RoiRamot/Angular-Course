import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
  IsUserLogged: boolean;
  IsLoginScreenOpen: boolean;
  LoggedUser: string;
  private userLoggedSubject = new Subject<boolean>();
  public UserLoggedInMessage = this.userLoggedSubject.asObservable();
  constructor() { }

  Login(userName: string, password: string) {
    if (userName === 'User' && password === 'User') {
      this.IsUserLogged = true;
      this.LoggedUser = userName;
      this.userLoggedSubject.next(true);
      this.IsLoginScreenOpen = false;
    }
  }
  OpenLogin() {
    this.IsLoginScreenOpen = true;
  }
  Logout() {
    this.IsUserLogged = false;
    this.userLoggedSubject.next(false);
    this.LoggedUser = '';
  }
}
