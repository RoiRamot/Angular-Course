import { Directive, Output, Input, ElementRef, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appConfirmation]'
})
export class ConfirmationDirective {
  @Input() Message: string;
  @Output() OnClick = new EventEmitter();
  constructor(private el: ElementRef) {
  }
  @HostListener('click', ['$event'])
  Click(event: Event) {
    if (confirm(this.Message)) {
      this.OnClick.emit();
    }
  }

}
