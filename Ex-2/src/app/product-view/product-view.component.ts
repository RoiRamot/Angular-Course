import { Component, OnInit, Input } from '@angular/core';
import { Product, Category } from '../../assets/Models';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() ProductsList: Array<Product>;
  @Input() CategoriesList: Array<Category>;
  @Input() SelectedCategoryName: string;
  constructor() { }

  ngOnInit() {
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
}
