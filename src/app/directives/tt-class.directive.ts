import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ttClass]'
})
export class TtClassDirective implements OnInit{
  ngOnInit(): void {
    console.log('this.ttClass: ', this.ttClass);
    this.el.nativeElement.classList.add(this.ttClass);
  }

  @Input() ttClass!: string;

  constructor(private el: ElementRef) {}
}
