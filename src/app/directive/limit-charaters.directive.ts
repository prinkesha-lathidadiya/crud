import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLimitCharaters]'
})
export class LimitCharatersDirective {

  @Input() sliceLength: number = 50

  // constructor(el: ElementRef) {
  //   setTimeout(() => {
  //       el.nativeElement.innerText = el.nativeElement.innerText.replace(/( |<([^>]+)>)/ig, "")
  //   }, 50)
  // }
  constructor(el: ElementRef) {
    setTimeout(() => {
      debugger
      const dataLength = el.nativeElement.innerText?.length
      if (dataLength > 50) {
        el.nativeElement.innerText = el.nativeElement.innerText.slice(0, this.sliceLength - 3) + '...'
      }
    }, 50)
  }

}
