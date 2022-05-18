import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerConfig } from 'src/hammer';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './app-material.module';
import { MatIconRegistry } from '@angular/material/icon';
import { MetaService } from 'src/services/meta.service';
import { ASSET_CONFIG, ICON_CONFIG } from './app.config';
import { IconConfig, ImgConfig } from 'src/properties';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxGoogleAnalyticsModule.forRoot(environment.google_analytics),
    NgxGoogleAnalyticsRouterModule,
    SharedModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _meta: MetaService
  ) {
    ICON_CONFIG.forEach((conf: IconConfig) => {
      this.addIconToRegistry(conf.name, conf.src);
    });
    ASSET_CONFIG.forEach((conf: ImgConfig) => {
      let img = new Image();
      img.src = conf.src;
      img.alt = conf.alt;
    });
  }

  public addIconToRegistry(name: string, resourceUrl: string) {
    if (this._meta.isBrowser()) {
      this._matIconRegistry.addSvgIcon(
        name,
        this._domSanitizer.bypassSecurityTrustResourceUrl(resourceUrl)
      );
    } else {
      this._matIconRegistry.addSvgIconLiteral(
        name,
        this._domSanitizer.bypassSecurityTrustHtml('<svg></svg>')
      );
    }
  }
}
