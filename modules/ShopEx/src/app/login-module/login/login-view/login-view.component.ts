import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/authentication.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  public Password: string;
  public UserName: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  Login() {
    this.authenticationService.Login(this.UserName, this.Password);
  }
}
