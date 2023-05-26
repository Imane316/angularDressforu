import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css']
})
export class CategorydetailComponent implements OnInit {
  category: any;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idcategory');
    if (id) {
      this.getCategoryById(id);
    }
  }

  getCategoryById(id: string): void {
    this.categoryService.getCategoryById(id)
      .subscribe(response => {
        this.category = response;
      });
  }
}
