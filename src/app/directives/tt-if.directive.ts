import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[ttIf]'
})
export class ttIfDirective {
  _ttif: boolean = false;

  constructor(
    private _viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) {
      console.log('_viewContainer: ', _viewContainer);
      console.log('templateRef: ', templateRef);
    }

  @Input()
  set ttIf(condition: boolean) {
    this._ttif = condition;
    this._updateView();
  }

  _updateView() {
    if (this._ttif) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}
