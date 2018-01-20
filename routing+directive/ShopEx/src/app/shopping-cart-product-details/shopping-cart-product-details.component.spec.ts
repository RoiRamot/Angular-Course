import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartProductDetailsComponent } from './shopping-cart-product-details.component';

describe('ShoppingCartProductDetailsComponent', () => {
  let component: ShoppingCartProductDetailsComponent;
  let fixture: ComponentFixture<ShoppingCartProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
