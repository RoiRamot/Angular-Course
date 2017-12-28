import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Category } from '../../assets/Models';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  @Output() OnCategoryClickEvent = new EventEmitter<number>();
  @Input() CategoryList: Array<Category>;
  constructor() {
   }

  ngOnInit() {
  }

  }
