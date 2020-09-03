import { NgModule } from '@angular/core';
import { ProductShowComponent } from './product-show/product-show.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ProductShowComponent],
    imports:[CommonModule],
    providers:[],
    exports:[ProductShowComponent]
})
export class ProductPresentationModule{}