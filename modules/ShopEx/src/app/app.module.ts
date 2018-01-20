import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginModule } from './login-module/login/login.module';
import { ProductsModule } from './products/products.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './app/home-view/home-view.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ShoppingCartComponent } from './cart/shopping-cart/shopping-cart.component';
import { CartGuard } from './cart/cart.guard';
import { ShoppingCartProductDetailsComponent } from './cart/shopping-cart-product-details/shopping-cart-product-details.component';
import { AboutViewComponent } from './app/about-view/about-view.component';
import { ContactViewComponent } from './app/contact-view/contact-view.component';
import { HeaderMenuComponent } from './app/header-menu/header-menu.component';
import { MenuViewComponent } from './app/menu-view/menu-view.component';
import { core } from '@angular/compiler';
import { CoreModule } from './core/core.module';
import { MainViewComponent } from './main-view/main-view.component';
import { CartModule } from './cart/cart.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'Home', component: HomeViewComponent },
  { path: 'Products', component: ProductViewComponent },
  { path: 'Products/:id', component: ProductDetailsComponent },
  {
    path: 'ShoppingCart', component: ShoppingCartComponent, canActivate: [CartGuard],
    children: [
      { path: ':id', component: ShoppingCartProductDetailsComponent }
    ]
  },
  { path: 'About', component: AboutViewComponent },
  { path: 'Contact', component: ContactViewComponent },
  { path: '**', component: HomeViewComponent },
];
@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    LoginModule,
    ProductsModule,
    CartModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true },
    )
  ],
  declarations: [
    AppComponent,
    AboutViewComponent,
    HomeViewComponent,
    ContactViewComponent,
    HeaderMenuComponent,
    MenuViewComponent,
    MainViewComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
