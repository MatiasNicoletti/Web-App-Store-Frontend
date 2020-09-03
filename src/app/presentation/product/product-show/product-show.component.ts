import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/features/product/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {
  productSubscription:Subscription;
  productList = [];
  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    this.getProds();
  }

  getProds(){
    this.productSubscription = this.prodService.getProds().subscribe((response:[]) => {
      this.productList = response;
   });
  }
  
}
