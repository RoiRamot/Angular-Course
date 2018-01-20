import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { AnchorWrapperComponent } from './anchor-wrapper/anchor-wrapper.component';
import { ProductsService } from './products.service';
import { WorkSpaceManagerService } from './work-space-manager.service';
import { MainViewComponent } from './main-view/main-view.component';
import { DataAccessorService } from './data-accessor.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material';
import { ShoppingCartService } from './shopping-cart.service';
import { LocliazationPipe } from './locliazation.pipe';
import { LocaliztionService } from './localiztion.service';
import { LoginViewComponent } from './login-view/login-view.component';
import { AuthenticationService } from './authentication.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ConfirmationDirective } from './confirmation.directive';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartProductDetailsComponent } from './shopping-cart-product-details/shopping-cart-product-details.component';
import { CartGuard } from './cart.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'Home', component: HomeViewComponent },
  { path: 'Products', component: ProductViewComponent },
  { path: 'Products/:id', component: ProductDetailsComponent},
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
  declarations: [
    MainViewComponent,
    AppComponent,
    ProductViewComponent,
    AboutViewComponent,
    MenuViewComponent,
    HeaderMenuComponent,
    HomeViewComponent,
    ContactViewComponent,
    SocialButtonsComponent,
    FlipCardComponent,
    AnchorWrapperComponent,
    ShoppingCartComponent,
    LocliazationPipe,
    LoginViewComponent,
    ProductEditComponent,
    ConfirmationDirective,
    ProductDetailsComponent,
    ShoppingCartProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [MatExpansionModule],
  providers: [ProductsService, WorkSpaceManagerService, DataAccessorService,
    ShoppingCartService, LocaliztionService, AuthenticationService, CartGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
