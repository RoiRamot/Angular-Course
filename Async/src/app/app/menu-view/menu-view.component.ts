import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WorkSpaceManagerService } from '../../core/work-space-manager.service';
import { ShoppingCartService } from '../../cart/shopping-cart.service';
import { LocalizationService } from '../../core/localiztion.service';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {
  MenuItems: string[];
  selectedItem: string;
  cartCount = 0;
  currentLanguage: string;
  private subscriptions: Subscription;
  constructor(private WorkSpaceManager: WorkSpaceManagerService, private cartService: ShoppingCartService,
    private localizationService: LocalizationService) {
    this.MenuItems = this.WorkSpaceManager.screensKeys;
    this.subscriptions = cartService.CartUpdatedMessage.subscribe((items) => { this.cartCount = items.length; });
  }
  ngOnInit() {
  }
  listClick(event, newValue: string) {
    this.WorkSpaceManager.SetWorkspace(newValue);
    this.WorkSpaceManager.SetMenuState(false);
  }
  BackgroundClick() {
    this.WorkSpaceManager.SetMenuState(false);
  }
  IsShoppingCart(name: string) {
    if (name === 'ShoppingCart') {
      return true;
    }
    return false;
  }
}

