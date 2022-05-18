import { Injectable } from '@angular/core';
import { APP_CONFIG, orientations } from 'src/app/app.config';


@Injectable({
  providedIn: 'root'
})
export class ConfService {

  public orientation: orientations = APP_CONFIG.orientation;

  constructor() { }

  public vertical(): boolean {
    return this.orientation === orientations.vertical;
  }

  public horizontal(): boolean{
    return this.orientation === orientations.horizontal;
  }
}
