import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductPresentationModule } from './presentation/product/product.presentation.module';
import { ProductFeatureModule } from './features/product/product.feature.module';
import { ProductShowComponent } from './presentation/product/product-show/product-show.component';
import { HttpModule } from './core/async/http/http.module';
import { ProductHttpService } from './core/async/http/product-http/product-http.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './presentation/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
  ],
  imports: [
    BrowserModule,
    ProductPresentationModule,
    ProductFeatureModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ProductHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
