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

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    AboutViewComponent,
    MenuViewComponent,
    HeaderMenuComponent,
    HomeViewComponent,
    ContactViewComponent,
    SocialButtonsComponent,
    FlipCardComponent,
    AnchorWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
