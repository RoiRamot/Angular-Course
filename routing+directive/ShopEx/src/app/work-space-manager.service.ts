import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
@Injectable()
export class WorkSpaceManagerService {
  public _selectedScreen: string;
  private _isMenuOpen = false;
  private IsMenuOpenSubject = new Subject<boolean>();
  public IsMenuOpenMessage = this.IsMenuOpenSubject.asObservable();
  private selectedScreenSubject = new Subject<string>();
  public SelectedScreenMessage = this.selectedScreenSubject.asObservable();
  public screensKeys = ['Home', 'About', 'Products', 'ShoppingCart', 'Contact'];
  constructor(private router: Router) {
  }

  SetWorkspace(screenName: string) {
    this._selectedScreen = screenName;
    this.router.navigate([screenName]);
    this.selectedScreenSubject.next(screenName);
  }
  SetMenuState(state: boolean) {
    this._isMenuOpen = state;
    this.IsMenuOpenSubject.next(state);
  }
  ToggleMenuState() {
    this._isMenuOpen = !this._isMenuOpen;
    this.IsMenuOpenSubject.next(this._isMenuOpen);
  }
}
