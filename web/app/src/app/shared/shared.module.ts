import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { SharedMaterialModule } from './shared-material.module';
import { SafePipe } from './pipes/sanitize.pipe';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    BannerComponent, 
    ErrorComponent, 
    FooterComponent,
    
    SafePipe, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedMaterialModule,
  ],
  exports: [
    BannerComponent,
    ErrorComponent,
    FooterComponent,

    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedMaterialModule,

    SafePipe,
  ],
})
export class SharedModule {}
