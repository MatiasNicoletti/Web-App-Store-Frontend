import { Injectable } from '@angular/core';
import { ProductFeatureModule } from './product.feature.module';

@Injectable({
    providedIn: ProductFeatureModule
})
export class ProductService{
    getMsg(){
        return 'message';
    }
}