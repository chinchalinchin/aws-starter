import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about/about.component';
import { AboutMaterialModule } from './about-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutRoutingModule,
    AboutMaterialModule,
    SharedModule
  ]
})
export class AboutModule { }
