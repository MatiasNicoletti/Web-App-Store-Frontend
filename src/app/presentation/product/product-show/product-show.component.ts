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
  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    this.productSubscription = this.prodService.getProds().subscribe(response => {
      // console.log(response); 
    });
    
  }
  
}
