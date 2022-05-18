import { Injectable } from '@angular/core';
import { APP_CONFIG, ASSET_CONFIG, orientations } from 'src/app/app.config';
import { Nav } from 'src/models';
import { NAV_CONFIG } from 'src/nav.config';
import { ImgConfig } from 'src/properties';


@Injectable({
  providedIn: 'root'
})
export class ConfService {

  public title: string = APP_CONFIG.title;
  public description: string = APP_CONFIG.description;
  public orientation: orientations = APP_CONFIG.orientation;

  private imgConfig: ImgConfig[] = ASSET_CONFIG;
  private navConfig: Nav[] = NAV_CONFIG;

  constructor() { }

  public vertical(): boolean {
    return this.orientation === orientations.vertical;
  }

  public horizontal(): boolean{
    return this.orientation === orientations.horizontal;
  }

  public getImgConfig(id: string): ImgConfig | undefined{
    return this.imgConfig.filter((conf:ImgConfig) => conf.id === id).pop();
  }

  public findNavByPath(path: string): Nav | undefined {
    return this.navConfig.filter((nav: Nav) => nav.path === path).pop();
  }
}
