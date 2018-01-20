import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product, Category } from './Models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class DataAccessorService {
  private products = new Array<Product>();
  private categories = new Array<Category>();
  private productsUpdatedSubject = new Subject<Product[]>();
  public ProductsUpdatedMessage = this.productsUpdatedSubject.asObservable();
  private categoriestsUpdatedSubject = new Subject<Category[]>();
  public CategoriesUpdatedMessage = this.categoriestsUpdatedSubject.asObservable();
  constructor(private http: HttpClient) {
    this.LoadProducts().subscribe(data => {
      let item: Product;
      for (item of data) {
        this.products.push(item);
      }
      this.productsUpdatedSubject.next(this.products);
      this.BuildCategories();
    });
  }
  readTextFile(file, callback) {
    return this.http.get(file);
  }
  LoadProducts(): Observable<Array<Product>> {
    return this.http.get('../assets/MOCK_DATA.json').pipe(
      map(json => json as Product[])
    );
  }
  onError() {
    console.log('there was an error loading products from db');
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
