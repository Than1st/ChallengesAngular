import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../interfaces/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = []

  // Dependency Injection
  constructor(private categoryService: CategoryService, private router: Router) {
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: value => this.categories = value,
      error: err => console.error(err),
      complete: () => console.info("Complete")
    })
  }
  addCategory(){
    this.router.navigate(['category/add'])
  }
  editCategory(id:number){
    this.router.navigate([`category/update/`, id])
  }
  deleteCategory(category:Category){
    this.categories.filter(f=> f !== category)
    this.categoryService.deleteCategory(category).subscribe()
    this.router.navigate(['category'])
  }
  ngOnInit(): void {
    this.getCategories()
  }

}
