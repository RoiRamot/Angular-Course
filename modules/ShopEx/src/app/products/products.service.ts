import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Category, Product } from '../core/Models';
import { DataAccessorService } from '../core/data-accessor.service';

@Injectable()
export class ProductsService {

  selectedCategoryId = -1;
  SelectedCategoryName = 'All';
  public categories = new Array<Category>();
  public products = new Array<Product>();
  private CategoryChangedSubject = new Subject<string>();
  public CategoryChangedMessage = this.CategoryChangedSubject.asObservable();
  private productsUpdatedSubject = new Subject<Product[]>();
  public ProductsUpdatedMessage = this.productsUpdatedSubject.asObservable();
  private categoriesUpdatedSubject = new Subject<Category[]>();
  public CategoriesUpdatedMessage = this.categoriesUpdatedSubject.asObservable();

  private subscriptions: Subscription;
  constructor(private dataAccessor: DataAccessorService) {
    this.subscriptions = dataAccessor.ProductsUpdatedMessage.subscribe((products) => {
      this.products = products;
      this.productsUpdatedSubject.next(products);
    });
    this.subscriptions = dataAccessor.CategoriesUpdatedMessage.subscribe((categories) => {
      this.categories = categories;
      this.categoriesUpdatedSubject.next(categories);
    });
    this.SetSelectedCategory('All');
  }

  SetSelectedCategory(name: string) {
    this.SelectedCategoryName = name;
    this.CategoryChangedSubject.next(name);
  }
  RemoveProduct(product: Product) {
    const index = this.products.indexOf(product, 0);
    if (index > -1) {
      this.products.splice(index, 1);
      this.productsUpdatedSubject.next(this.products);
    }
  }

  OnProductSave(product: Product) {
    const index = this.products.findIndex(x => x.id === product.id);
    if (index > -1) {
      this.products.splice(index, 1);
    }
    this.products.push(product);
    this.productsUpdatedSubject.next(this.products);
  }

}

