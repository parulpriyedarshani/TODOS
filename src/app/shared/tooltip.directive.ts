import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements AfterViewInit, OnChanges{

  public tippyInstance: any

  constructor(private elRef: ElementRef) { }

  @Input('appTooltip') tooltipContent: string;

  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.tooltipContent
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tooltipContent']) {  // input content has changed
      this.updateToolTipContent()
    }
  }

  updateToolTipContent() {
    if (this.tippyInstance) {
      this.tippyInstance.setContent(this.tooltipContent)
    }
  }


}
