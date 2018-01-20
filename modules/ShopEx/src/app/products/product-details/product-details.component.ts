import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../../core/Models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  private subscription: Subscription;
  selectedProduct: Product;
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(p => this.loadProduct(+p.get('id')));

  }
  loadProduct(productId: number) {
    this.selectedProduct = this.productService.products.find(item => item.id === productId);
  }

}
