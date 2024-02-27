import {Injectable} from '@angular/core';
import {InMemoryDbService, RequestInfo} from "angular-in-memory-web-api";
import {Observable} from 'rxjs';
import {Category} from "../interfaces/category";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const categories = [
      {id: 1, categoryName: "Computer"},
      {id: 2, categoryName: "Hobby"},
      {id: 3, categoryName: "Accessories"},
    ]
    const products = [
      {id: 1, name: "Hardisk", stock: 1, price: 100000, photo: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//109/MTA-88397019/oem_hardisk_internal_320gb_-_hardisk_pc_-_hardisk_pc_full01_b3fpaz3m.jpg"},
      {id: 2, name: "Mouse", stock: 1, price: 200000, photo: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/1/9/19U64AA-1_T1678863558.png"},
    ]
    return {categories, products}
  }

  genId(products: Product[]):number{
    return products.length > 0 ? Math.max(...products.map(products=>products.id))+1:11
  }

}
