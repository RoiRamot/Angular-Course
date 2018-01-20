import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../../assets/Models';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  CartList = new Array<Product>();
  constructor(private cartService: ShoppingCartService, private authenticationService: AuthenticationService, private route: Router) {
    this.CartList = cartService.GetCart();
  }
  ShowDetails(item: Product) {
    this.route.navigate(['ShoppingCart/' + item.id]);
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
