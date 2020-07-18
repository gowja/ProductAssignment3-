import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
title:String="Edit-Product Details";
id:string;
name:string;
code:string;
date:string;
desc:string;
price:string;
star:string;
url:string
  constructor(private productService: ProductService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.paramMap.get("id");
    this.name=this.activatedroute.snapshot.paramMap.get("pname");
    this.code=this.activatedroute.snapshot.paramMap.get("pcode");
    this.date=this.activatedroute.snapshot.paramMap.get("reldate");
    this.desc=this.activatedroute.snapshot.paramMap.get("desc");
    this.price=this.activatedroute.snapshot.paramMap.get("price");
    this.star=this.activatedroute.snapshot.paramMap.get("star");
    this.url=this.activatedroute.snapshot.paramMap.get("url");
  }

  EditProduct(){
    this.productService.editProduct(this.id,this.name,this.code,this.date,this.desc,this.price,this.star,this.url);
    console.log("edit data"+this.code);
    alert("success");
    this.router.navigate(['/']);
    this.ngOnInit();
  }
  
}
