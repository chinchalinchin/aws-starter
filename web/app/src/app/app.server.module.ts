import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material.module';
import { MatIconRegistry } from '@angular/material/icon';
import { MetaService } from 'src/services/meta.service';
import { IconConfig } from 'src/properties';
import { ICON_CONFIG } from './app.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ServerModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NoopAnimationsModule,
    MaterialModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private meta: MetaService
  ) {
    ICON_CONFIG.forEach((conf: IconConfig) => {
      this.addIconToRegistry(conf.name, conf.src);
    });
  }

  public addIconToRegistry(name: string, resourceUrl: string) {
    if (this.meta.isBrowser()) {
      this.matIconRegistry.addSvgIcon(
        name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(resourceUrl)
      );
    } else {
      this.matIconRegistry.addSvgIconLiteral(
        name,
        this.domSanitizer.bypassSecurityTrustHtml('<svg></svg>')
      );
    }
  }
}