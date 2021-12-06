import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    console.log('directiva llamada');

  }

  @Input('appHighlight')
  color = '';

  @HostListener('mouseenter') mouseEntered() {
    this.highlight(this.color || 'yellow');
  }

  @HostListener('mouseleave') mouseLeaved() {
    this.highlight('transparent');
  }

  private highlight(color: string) {
  this.element.nativeElement.style.backgroundColor = color;

}
}
