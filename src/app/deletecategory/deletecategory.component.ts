import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.css']
})
export class DeletecategoryComponent {
  category: any;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idcategory');
    if (id) {
      this.deleteCategory(id);
    }
  }

  deleteCategory(id: string): void {
    this.categoryService.deleteCategory(id)
      .subscribe(response => {
        this.category = response;
      });
  }
}
