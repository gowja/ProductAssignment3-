import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
id:string="";
price:string="";
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
  editProduct(id,name,code,date,desc,price,star,url){
    console.log("edit item"+code);
    var prod={
      pid:id,
      pnam:name,
      pcode:code,
      pdate:date,
      pdesc:desc,
      pprice:price,
      pstar:star,
      purl:url
    }
    return this.http.post("http://localhost:2222/edit",{"product":prod})
    .subscribe((edititem)=>{console.log("edit data"+code+prod.pprice)})
  }
}
