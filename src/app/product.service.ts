import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:2222/products");
  }
  newProduct(item){
    return this.http.post("http://localhost:2222/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
  }
  removeProduct(deldata){
    return this.http.post("http://localhost:2222/remove",{"product":deldata})
    .subscribe((deldata)=>{console.log(deldata)})
  }
}
