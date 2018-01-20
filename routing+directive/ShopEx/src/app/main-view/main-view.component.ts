import { Component, OnInit } from '@angular/core';
import { WorkSpaceManagerService } from '../work-space-manager.service';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  public selectedScreen: string;
  isMenuOpen = false;
  IsUserLoggedIn= false;
  private subscription: Subscription;
  constructor(private workSpaceManagerService: WorkSpaceManagerService, private authenticationService: AuthenticationService) {
    this.subscription = this.authenticationService.UserLoggedInMessage.subscribe((param) => {this.IsUserLoggedIn = param; });
  }
  ngOnInit() {
    this.subscription = this.workSpaceManagerService.IsMenuOpenMessage.subscribe((state: boolean) => { this.isMenuOpen = state; });
    this.subscription =
    this.workSpaceManagerService.SelectedScreenMessage.subscribe((screenName: string) => { this.selectedScreen = screenName; });
  }

}
