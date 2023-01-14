import {
  Directive,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[HightlightMouse]',
})
export class HightlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  @HostBinding('style.background-color') backgroundColor!: string;
  //constructor(private elementRef: ElementRef, private renderer : Renderer2) {}
}
