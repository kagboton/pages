import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  constructor(private element: ElementRef) {
    console.log('ClassDirective has been initialized');
  }

  @Input('appClass') set backgroudColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
