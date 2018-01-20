import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { WorkSpaceManagerService } from '../../core/work-space-manager.service';
import { LocalizationService } from '../../core/localiztion.service';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  HeaderImage = '../assets/HeaderBackground.jpeg';
  Languages = new Array<string>();
  SelectedLanguage: string;
  UserName: string;
  IsUserLoggedIn: boolean;
  private subscription: Subscription;
  constructor(private workSpaceManagerService: WorkSpaceManagerService,
    private LocalizationService: LocalizationService, private authenticationService: AuthenticationService) {
    this.subscription = authenticationService.UserLoggedInMessage.subscribe((param) => { this.IsUserLoggedIn = param; });
  }
  OnLanguageSelectionChanged(lang: string) {
    this.LocalizationService.SetLanguage(lang);
  }
  ngOnInit() {
    this.Languages = this.LocalizationService.AvailableLanguages;
    this.SelectedLanguage = this.LocalizationService.GetLanguage();
    this.UserName = this.authenticationService.LoggedUser;
  }
  ChangeMenuStateEvent() {
    this.workSpaceManagerService.ToggleMenuState();
  }
  OpenLogin() {
    this.authenticationService.OpenLogin();
  }
  Logout() {
    this.authenticationService.Logout();
  }
}
