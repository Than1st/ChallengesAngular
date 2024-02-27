import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {HomeComponent} from "./components/home/home.component";
import {PemiluComponent} from "./components/pemilu/pemilu.component";
import {CategoryComponent} from "./components/category/category.component";
import {AddCategoryComponent} from "./components/category/add-category.component";
import {EditCategoryComponent} from "./components/category/edit-category.component";
import {AddProductComponent} from "./components/product/add-product.component";
import {EditProductComponent} from "./components/product/edit-product.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'product/update/:id', component: EditProductComponent},
  {path: 'pemilu', component: PemiluComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/add', component: AddCategoryComponent},
  {path: 'category/update/:id', component: EditCategoryComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
