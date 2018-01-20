import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ProductsService } from '../products/products.service';
import { Product } from '../core/Models';

@Injectable()
export class ShoppingCartService {
  private CartList = new Array<Product>();
  private IsCartOpen = false;

  private cartUpdatedSubject = new Subject<Product[]>();
  public CartUpdatedMessage = this.cartUpdatedSubject.asObservable();
  private cartVisibilityChangedSubject = new Subject<boolean>();
  public cartVisibilityChangedMessage = this.cartVisibilityChangedSubject.asObservable();
  constructor(private productsService: ProductsService) { }
  AddProductToCart(product: Product) {
    this.CartList.push(product);
    this.cartUpdatedSubject.next(this.CartList);
    this.productsService.RemoveProduct(product);
  }
  RemoveProductToCart(product: Product) {
    const index = this.CartList.indexOf(product, 0);
    if (index > -1) {
      this.CartList.splice(index, 1);
      this.cartUpdatedSubject.next(this.CartList);
    }
  }
  GetCart(): Product[] {
    return this.CartList;
  }
}


