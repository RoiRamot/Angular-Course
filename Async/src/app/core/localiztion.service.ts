import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LocalizationService {
  public AvailableLanguages = ['Mandarin', 'Spanish', 'English'];
  private MandarinDic = {
    Home: '家',
    About: '关于',
    Products: '制品',
    ShoppingCart: '购物车',
    Contact: '联系'
  };
  private SpanishDic = {
    Home: 'Casa',
    About: 'Acerca',
    Products: 'Productos',
    ShoppingCart: 'Carrito de compras',
    Contact: 'Contacto'
  };
  private EnglishDic = {
    Home: 'Home',
    About: 'About',
    Products: 'Products',
    ShoppingCart: 'Shopping Cart',
    Contact: 'Contact'
  };
  private currentLanguage = 'English';

  constructor() { }
  GetValue(key: string): string {
    switch (this.currentLanguage) {
      case 'Mandarin':
        return this.MandarinDic[key];
      case 'Spanish':
        return this.SpanishDic[key];
      default:
        return this.EnglishDic[key];
    }
  }
  SetLanguage(name: string) {
    this.currentLanguage = name;
  }
  GetLanguage() {return this.currentLanguage; }
}
