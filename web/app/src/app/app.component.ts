import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { filter } from 'rxjs/operators';
import { Nav } from 'src/models';
import { NAV_CONFIG } from 'src/nav.config';

import { MetaService } from 'src/services/meta.service';
import { SeoService } from 'src/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Angular Starter Pack';
  public pageConfig: Nav[] = NAV_CONFIG;

  constructor(
    private _router: Router,
    private _renderer: Renderer2,
    private _seo: SeoService,
    private _meta: MetaService,
    private _ga: GoogleAnalyticsService,
  ){
    this._router.events
    .pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe((event) => {
      this.constructNavigation(()=>{
        if (this._meta.isServer()) {
          let conf = this.findNavByPath(event.url);
          this._seo.setStaticAtrributes();
          this._seo.setJsonLd(this._renderer, conf?.data ? conf.data : {});
          this._seo.updateTitle(
            conf?.page_title ? conf.page_title : this.title
          );
          this._seo.updateDescription(
            conf?.page_description
              ? conf.page_description
              : 'A site of earthly delectations.'
          );
          this._seo.updateMetaAttributes(conf ? conf.meta : undefined);
        }
      });
    });
  }

  private constructNavigation(callback: Function): void {
    this.pageConfig = NAV_CONFIG;
    callback();
  }
  private findNavByPath(path: string): Nav | undefined {
    return this.pageConfig.filter((nav: Nav) => nav.path === path).pop();
  }
}
