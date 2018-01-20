import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../../assets/Models';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  CartList = new Array<Product>();
  constructor(private cartService: ShoppingCartService, private authenticationService: AuthenticationService) {
    this.CartList = cartService.GetCart();
  }

  RemoveProductFromCart(product: Product) {
    if (!this.authenticationService.IsUserLogged) {
      return;
    }
    this.cartService.RemoveProductToCart(product);
  }
  ngOnInit() {
  }

}
