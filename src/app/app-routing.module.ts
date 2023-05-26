import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DressListComponent } from './dress-list/dress-list.component';
import { DressdetailComponent } from './dressdetail/dressdetail.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';

const routes: Routes = [
  {path : 'dresses', component: DressListComponent},
  {path : 'categories', component: CategoriesComponent},
  {path : 'dressdetail/:iddress', component: DressdetailComponent},
  {path : 'categorydetail/:idcategory', component: CategorydetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
