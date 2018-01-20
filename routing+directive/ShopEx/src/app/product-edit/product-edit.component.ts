import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../assets/Models';
import { AuthenticationService } from '../authentication.service';
import { ProductsService } from '../products.service';
import { FormsModule, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() productToEdit: Product;
  @Output() OnProductSave = new EventEmitter<Product>();
  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {

  }
  Save() {
    this.OnProductSave.emit(this.productToEdit);
  }
}
