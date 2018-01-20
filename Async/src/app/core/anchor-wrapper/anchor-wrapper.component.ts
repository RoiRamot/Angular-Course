import { Component, QueryList, AfterContentInit, ContentChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-anchor-wrapper',
  templateUrl: './anchor-wrapper.component.html',
  styleUrls: ['./anchor-wrapper.component.css']
})
export class AnchorWrapperComponent implements AfterContentInit {
  @ContentChildren('External', {read: ElementRef}) links: QueryList<ElementRef>;
  constructor() { }


  ngAfterContentInit() {
    this.links.map(link => link.nativeElement.target = '_blank');
   }
}
