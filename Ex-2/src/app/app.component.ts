import { Component } from '@angular/core';
import { Category, Product } from '../assets/Models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  IsMenuOpen = false;
  selectedScreen: string;
  selectedCategoryId = -1;
  SelectedCategoryName: string;
  public categories: Array<Category>;
  public products: Array<Product>;
  constructor() {
    this.categories = new Array();
    this.products = new Array();
    this.LoadData();
  }
  ChangeMenuStateEvent() {
    this.IsMenuOpen = !this.IsMenuOpen;
  }
  ChangeScreenEvent(screen: string) {
    this.selectedScreen = screen;
  }
  OnCategorySelectedEvent(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.SelectedCategoryName = this.categories[this.selectedCategoryId].title;
    this.selectedScreen = 'Products';
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

  CategoryIdToTitle(id: number): string {
    return 'category' + id;
  }


  LoadData() {
    this.categories.push(new Category(0, 'All', ''));
    this.SelectedCategoryName = this.categories[0].title;
    this.readTextFile('../assets/MOCK_DATA.json', (text) => {
      const data = JSON.parse(text);
      let item: Product;
      let allCategoriesNames: string[];
      allCategoriesNames = [];
      let id = 1;
      for (item of data) {
        if (!allCategoriesNames.includes(item.categoryName)) {
          allCategoriesNames.push(item.categoryName);
          this.categories.push(new Category(id, item.categoryName, item.image));
          id++;
        }
        this.products.push(item);
      }
    });
  }

  GetImage(name: string) {

  }
}



