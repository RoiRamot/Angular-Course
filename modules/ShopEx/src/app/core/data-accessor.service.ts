import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product, Category } from './Models';

@Injectable()
export class DataAccessorService {
  private products = new Array<Product>();
  private categories = new Array<Category>();
  private productsUpdatedSubject = new Subject<Product[]>();
  public ProductsUpdatedMessage = this.productsUpdatedSubject.asObservable();
  private categoriestsUpdatedSubject = new Subject<Category[]>();
  public CategoriesUpdatedMessage = this.categoriestsUpdatedSubject.asObservable();
    constructor() {
    this.LoadProducts();
  }
  readTextFile(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType('application/json');
    rawFile.open('GET', file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status === 200) {
        callback(rawFile.responseText);
      }
    };
    rawFile.send(null);
  }
  LoadProducts() {
    this.readTextFile('../assets/MOCK_DATA.json', (text) => {
      const data = JSON.parse(text);
      let item: Product;
      for (item of data) {
        this.products.push(item);
      }
      this.productsUpdatedSubject.next(this.products);
      this.BuildCategories();
    });
  }
  BuildCategories() {
    let id = 1;
    const categoriesNames = new Array<string>();
    for (const item of this.products) {
      if (!categoriesNames.includes(item.categoryName)) {
        categoriesNames.push(item.categoryName);
        this.categories.push(new Category(id, item.categoryName, item.image));
        id++;
      }
    }
    this.categoriestsUpdatedSubject.next(this.categories);
  }
  GetProducts(limit: number): Product[] {
    if (limit > 1) {
      if (limit >= this.products.length) {
        limit = this.products.length;
      }
      return this.products.slice(0, limit);
    }
    return this.products;
  }
  GetCategories(): Category[] {
    return this.categories;
  }
  Refresh() {
    this.productsUpdatedSubject.next(this.products);
    this.categoriestsUpdatedSubject.next(this.categories);
  }
}
