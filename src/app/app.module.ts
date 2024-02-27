import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NavbarComponent } from './components/layout/navbar.component';
import {HomeComponent} from "./components/home/home.component";
import { PaslonComponent } from './components/pemilu/paslon.component';
import { PemiluComponent } from './components/pemilu/pemilu.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";
import {flatMap} from "rxjs";
import { CategoryComponent } from './components/category/category.component';
import {HttpClientModule} from "@angular/common/http";
import { AddCategoryComponent } from './components/category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './components/product/edit-product.component';
import { AddProductComponent } from './components/product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductItemComponent,
    NavbarComponent,
    HomeComponent,
    PaslonComponent,
    PemiluComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
