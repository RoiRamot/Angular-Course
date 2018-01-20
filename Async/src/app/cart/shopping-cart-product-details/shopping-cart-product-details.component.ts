import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductsService } from '../../products/products.service';
import { Product } from '../../core/Models';

@Component({
  selector: 'app-shopping-cart-product-details',
  templateUrl: './shopping-cart-product-details.component.html',
  styleUrls: ['./shopping-cart-product-details.component.css']
})
export class ShoppingCartProductDetailsComponent implements OnInit {
  product: Product;
  private subscription: Subscription;
  private cartList = new Array<Product>();
  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: ShoppingCartService) { }
  ngOnInit() {
    this.cartList = this.cartService.GetCart();
    this.subscription = this.route.paramMap.subscribe(p => this.loadProduct(+p.get('id')));
  }
  loadProduct(productId: number) {
    const prod = this.cartList.find(item => item.id === productId);
    if (prod == null) {
      this.product = new Product();
      return;
    }
    this.product = prod;
  }

}
