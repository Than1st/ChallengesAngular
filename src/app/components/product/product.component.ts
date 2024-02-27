import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = []

  // Dependency Injection
  constructor(private productService: ProductService, private router: Router) {
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: value => this.products = value,
      error: err => console.error(err),
      complete: () => console.info("Complete")
    })
  }
  addProduct(){
    this.router.navigate(['product/add'])
  }
  editProduct(id:number){
    this.router.navigate([`product/update/`, id])
  }
  deleteProduct(product:Product){
    this.products.filter(f=> f !== product)
    this.productService.deleteProduct(product).subscribe()
    this.router.navigate(['product'])
  }
  ngOnInit(): void {
    this.getProducts()
  }

}
