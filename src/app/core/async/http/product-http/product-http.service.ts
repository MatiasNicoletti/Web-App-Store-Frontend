import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private httpService: HttpClient ) { }

  getAllProducts(){
    
    return this.httpService.get('http://127.0.0.1:3000/'); 
    // this.httpService.get<any[]>('http://127.0.0.1:3000/').subscribe(response => {
    //   console.log(response);
    // });

  }
}
