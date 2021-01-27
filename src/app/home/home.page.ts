import {Component} from '@angular/core';
import {TooltipEvent} from '../../../projects/ionic4-tooltips/src/models/tooltip-event.model';

@Component({
  selector:    'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [
    'home.page.scss'
  ],
})
export class HomePage {
  debounce:number = 0;
  duration:number = 3000;
  showArrow:boolean = true;
  showToggleTooltip:boolean = true;
  tooltipEvent:TooltipEvent = TooltipEvent.CLICK;
}
