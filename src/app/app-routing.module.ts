import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DressListComponent } from './dress-list/dress-list.component';
import { DressdetailComponent } from './dressdetail/dressdetail.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { AddDressComponent } from './add-dress/add-dress.component';
const routes: Routes = [
  {path : 'dresses', component: DressListComponent},
  {path : 'categories', component: CategoriesComponent},
  {path : 'dressdetail/:iddress', component: DressdetailComponent},
  {path : 'categorydetail/:idcategory', component: CategorydetailComponent},
  { path: 'add-dress', component: AddDressComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
