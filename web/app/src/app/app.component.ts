import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { filter } from 'rxjs/operators';
import { ConfService } from 'src/services/conf.service';

import { MetaService } from 'src/services/meta.service';
import { SeoService } from 'src/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _router: Router,
    private _renderer: Renderer2,
    private _seo: SeoService,
    private _meta: MetaService,
    private _conf: ConfService,
    private _ga: GoogleAnalyticsService,
  ){
    this._router.events
    .pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe((event) => {
      if (this._meta.isServer()) {
        let conf = this._conf.findNavByPath(event.url);
        this._seo.setStaticAtrributes();
        this._seo.setJsonLd(this._renderer, conf?.data ? conf.data : {});
        this._seo.updateTitle(
          conf?.page_title ? conf.page_title : this._conf.title
        );
        this._seo.updateDescription(
          conf?.page_description
            ? conf.page_description
            : this._conf.description
        );
        this._seo.updateMetaAttributes(conf ? conf.meta : undefined);
      }
    });
  }
}
