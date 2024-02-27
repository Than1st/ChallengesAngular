import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  form: FormGroup
  submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      product_name: ['', Validators.required],
      product_photo: ['', Validators.required],
      product_price: ['', Validators.required],
      product_stock: ['', Validators.required],
    })
  }
  get f():any{return this.form.controls}
  onSubmit(){
    this.submitted = true;
    if (this.form.invalid){
      return
    }
    const name: string= this.f.product_name.value
    const photo: string= this.f.product_photo.value
    const price: number= this.f.product_price.value
    const stock: number= this.f.product_stock.value
    this.productService.addProduct({name, stock, photo, price} as Product).subscribe(()=>this.router.navigate(['product']))
  }
  ngOnInit(): void {
  }
}
