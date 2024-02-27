import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../interfaces/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  form!: FormGroup
  submitted = false
  product!: Product

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((param) => {
      this.productService.getProduct(param['id'])
        .subscribe((res) => {
            this.product = res
            this.form = new FormGroup({
              product_id: new FormControl(this.product.id),
              product_name: new FormControl(this.product.name),
              product_photo: new FormControl(this.product.photo),
              product_price: new FormControl(this.product.price),
              product_stock: new FormControl(this.product.stock),
            })
          }
        )
    })
  }

  get f(): any {
    return this.form.controls
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return
    }
    const id: number = this.f.product_id.value
    const name: string = this.f.product_name.value
    const photo: string = this.f.product_photo.value
    const stock: number = this.f.product_stock.value
    const price: number = this.f.product_price.value
    this.productService.updateProduct({
      id,
      name,
      photo,
      stock,
      price
    } as Product).subscribe(() => this.router.navigate(['product']))
  }

  ngOnInit(): void {
  }
}
