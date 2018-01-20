import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsService } from './products.service';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, CoreModule, FormsModule],
  declarations: [ProductViewComponent,
    ProductEditComponent,
    ProductDetailsComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
