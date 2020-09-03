import { Injectable, OnInit } from '@angular/core';
import { ProductFeatureModule } from './product.feature.module';
import { ProductHttpService } from 'src/app/core/async/http/product-http/product-http.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: ProductFeatureModule
})
export class ProductService implements OnInit {
    private productList= [];
    private productSubject = new Subject();
    constructor(private productHttpService: ProductHttpService) { }

    ngOnInit(): void {
        this.productHttpService.getAllProducts().pipe().subscribe((response: { status: string, results: number, result: any[] }) => {
            this.productSubject.next([...response.result]);
            this.productList = response.result;
            
        });
    }
    getProds(){
        this.productHttpService.getAllProducts().pipe().subscribe((response: { status: string, results: number, result: any[] }) => {
            this.productSubject.next([...response.result]);
            this.productList = response.result;
            
        });
        return this.productSubject.asObservable();
    }
    
}