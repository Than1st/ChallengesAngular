import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";
import {Category} from "../../interfaces/category";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  form: FormGroup
  submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      category_name: ['', Validators.required]
    })
  }
  get f():any{return this.form.controls}
  onSubmit(){
    this.submitted = true;
    if (this.form.invalid){
      return
    }
    const categoryName: string= this.f.category_name.value
    this.categoryService.addCategory({categoryName} as Category).subscribe(()=>this.router.navigate(['category']))
  }
  ngOnInit(): void {
  }

}
