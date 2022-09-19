import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[ttToolTip]'
})
export class TtToolTipDirective {
  @Input()toolTip!: string;

  elToolTip: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('this: ', this.toolTip);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.elToolTip) {
      this.showHint();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.elToolTip) {
      this.removeHint();
    }
  }

  ngOnInit() {}

  removeHint() {
    this.renderer.removeClass(this.elToolTip, 'tooltip');
    this.renderer.removeChild(document.body, this.elToolTip);
    this.elToolTip = null;
  }

  showHint() {
    console.log('this: ', this.toolTip);
    this.elToolTip = this.renderer.createElement('span');
    const text= this.renderer.createText(this.toolTip);
    this.renderer.appendChild(this.elToolTip, text);

    this.renderer.appendChild(document.body, this.elToolTip);
    this.renderer.addClass(this.elToolTip, 'tooltip');

    let hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    let tooltipPos = this.elToolTip.getBoundingClientRect();

    let top = hostPos.bottom + 10;
    let left = hostPos.left;

    this.renderer.setStyle(this.elToolTip, 'top', `${top}px`);
    this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
  }
}