import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[videoItem]'
})
export class VideoSliderDirective {

  constructor(public tpl: TemplateRef<any>) {
     
   }

}
