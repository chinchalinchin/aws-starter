import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import 'hammerjs';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement): HammerManager {
    return new Hammer.Manager(element, {
      touchAction: 'auto',
      inputClass: Hammer.TouchInput,
      recognizers: [
        [
          Hammer.Swipe,
          {
            direction: Hammer.DIRECTION_HORIZONTAL,
          },
        ],
      ],
    });
  }
}
