import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'add',component:NewProductComponent},
  {path:'pedit/:id/:pname/:pcode/:reldate/:desc/:price/:star/:url',component:ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
