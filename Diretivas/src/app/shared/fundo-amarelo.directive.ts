import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]',
})
export class FundoAmareloDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    //elementRef.nativeElement.style.backgroundColor = 'yellow';
    renderer.setStyle(elementRef.nativeElement, 'background-color', 'yellow');
  }
}
