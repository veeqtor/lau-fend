import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[lauSidebarOverlay]',
})
export class SidebarOverlayDirective {

  constructor(private _el: ElementRef) {
  }

  @Output() overlayClicked: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any): void {
    if (targetElement === this._el.nativeElement) {
      this.overlayClicked.emit(true);
    }
  }
}
