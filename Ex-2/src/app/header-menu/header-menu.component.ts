import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
 @Output() ChangeMenuStateEvent = new EventEmitter<string>();
  HeaderImage= '../assets/HeaderBackground.jpeg';
  isMenuOpen: boolean;
  constructor() { }

  ngOnInit() {
  }
}
