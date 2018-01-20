import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartGuard } from './cart.guard';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartProductDetailsComponent } from './shopping-cart-product-details/shopping-cart-product-details.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router/';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  providers: [CartGuard, ShoppingCartService],
  declarations: [
    ShoppingCartComponent,
    ShoppingCartProductDetailsComponent]
})
export class CartModule { }
