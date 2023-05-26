import { Component, OnInit} from '@angular/core';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(response => {
        this.categories = response;
      });
  }
}
