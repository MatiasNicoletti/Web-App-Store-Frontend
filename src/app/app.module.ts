import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductPresentationModule } from './presentation/product/product.presentation.module';
import { ProductFeatureModule } from './features/product/product.feature.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductPresentationModule,
    ProductFeatureModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
