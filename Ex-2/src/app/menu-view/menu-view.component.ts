import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SocialMenuItem } from '../../assets/Models';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {
  @Output() ChangeMenuStateEvent = new EventEmitter();
  @Output() ChangeScreenEvent = new EventEmitter<string>();
  MenuItems: string[];
  selectedItem: string;
  constructor() {
    this.MenuItems = ['Home', 'About', 'Products', 'Contact'];
  }
  ngOnInit() {
  }
  listClick(event, newValue) {
    this.selectedItem = newValue;
    this.ChangeMenuStateEvent.emit();
    this.ChangeScreenEvent.emit(this.selectedItem);
}
}

