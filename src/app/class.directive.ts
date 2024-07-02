import { Directive } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {

  constructor() {
    console.log('ClassDirective has been initialized');
   }

}
