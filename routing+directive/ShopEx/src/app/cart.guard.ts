import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';



@Injectable()
export class CartGuard implements CanActivate {
  private subscription: Subscription;
  IsUserLoggedIn: boolean;
  constructor(private authenticationService: AuthenticationService) {
    this.subscription = this.authenticationService.UserLoggedInMessage.subscribe((param) => { this.IsUserLoggedIn = param; });
  }
  canActivate() {
    if (!this.IsUserLoggedIn) {
      this.authenticationService.OpenLogin();
      return false;
    }
    return true;
  }
}
