import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { Product, Category } from '../../core/Models';
import { Subscription } from 'rxjs/Subscription';
import { ProductsService } from '../products.service';
import { AuthenticationService } from '../../core/authentication.service';
import { ShoppingCartService } from '../../cart/shopping-cart.service';
import { WorkSpaceManagerService } from '../../core/work-space-manager.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  ProductsList: Array<Product>;
  CategoriesList: Array<Category>;
  SelectedCategoryName: string;
  IsInEditMode: boolean;
  ProductToEdit: Product;
  private subscriptions: Subscription;
  constructor(private productsService: ProductsService, private cartService: ShoppingCartService,
    private authenticationService: AuthenticationService, private worksSpaceManager: WorkSpaceManagerService, private route: Router) {
    this.subscriptions = productsService.CategoryChangedMessage.subscribe((categoryName) => { this.SelectedCategoryName = categoryName; });
    this.subscriptions = productsService.ProductsUpdatedMessage.subscribe((products) => { this.ProductsList = products; });
    this.subscriptions = productsService.CategoriesUpdatedMessage.subscribe((categories) => { this.CategoriesList = categories; });
  }

  ngOnInit() {
    this.CategoriesList = this.productsService.categories;
    this.ProductsList = this.productsService.products;
    this.SelectedCategoryName = this.productsService.SelectedCategoryName;
  }
  SelectedCategoryChange(name: string) {
    this.productsService.SetSelectedCategory(name);
  }
  AddProductToCart(product: Product) {
    if (!this.authenticationService.IsUserLogged) {
      return;
    }
    this.cartService.AddProductToCart(product);
  }
  ShowProductDetails(product: Product) {
    const url = 'Products/' + product.id;
    this.route.navigate([url]);
  }
  EditProduct(product: Product) {
    this.IsInEditMode = true;
    const productToEdit = new Product();
    productToEdit.id = product.id;
    productToEdit.title = product.title;
    productToEdit.categoryName = product.categoryName;
    productToEdit.description = product.description;
    productToEdit.image = product.image;
    productToEdit.price = product.price;
    this.ProductToEdit = productToEdit;
  }
  Filer(name: string): boolean {
    if (this.SelectedCategoryName === 'All') {
      return true;
    }
    if (this.SelectedCategoryName === name) {
      return true;
    }
    return false;
  }
  OnProductSave(product: Product) {
    this.productsService.OnProductSave(product);
    this.IsInEditMode = false;
  }
}
