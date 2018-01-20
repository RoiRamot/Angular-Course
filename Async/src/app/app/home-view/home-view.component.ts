import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Category } from '../../core/Models';
import { ProductsService } from '../../products/products.service';
import { WorkSpaceManagerService } from '../../core/work-space-manager.service';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  CategoryList: Array<Category>;
  private Subscription: Subscription;
  constructor(private productsService: ProductsService, private workSpaceManagerService: WorkSpaceManagerService) {
    this.Subscription = productsService.CategoriesUpdatedMessage.subscribe((categories) => {this.CategoryList = categories; } );
  }

  ngOnInit() {
    this.CategoryList = this.productsService.categories;
  }
  OnCategoryClickEvent(name) {
    this.productsService.SetSelectedCategory(name);
    this.workSpaceManagerService.SetWorkspace('Products');
  }
  }
