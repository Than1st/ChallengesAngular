import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../interfaces/category";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  form!: FormGroup
  submitted = false
  category!: Category

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((param) => {
      this.categoryService.getCategory(param['id'])
        .subscribe((res) => {
            this.category = res
            this.form = new FormGroup({
              category_id: new FormControl(this.category.id),
              category_name: new FormControl(this.category.categoryName)
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
    const id: number = this.f.category_id.value
    const categoryName: string = this.f.category_name.value
    this.categoryService.updateCategory({
      id,
      categoryName
    } as Category).subscribe(() => this.router.navigate(['category']))
  }

  ngOnInit(): void {
  }
}
