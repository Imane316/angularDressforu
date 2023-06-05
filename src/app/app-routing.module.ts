import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DressListComponent } from './dress-list/dress-list.component';
import { DressdetailComponent } from './dressdetail/dressdetail.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { AddDressComponent } from './add-dress/add-dress.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path : 'dresses', component: DressListComponent},
  { path : 'categories', component: CategoriesComponent},
  { path : 'dressdetail/:iddress', component: DressdetailComponent},
  { path : 'categorydetail/:idcategory', component: CategorydetailComponent},
  { path: 'adddress', component: AddDressComponent },
  { path: 'addcategory', component: AddCategoryComponent },
  { path:'contact', component: ContactComponent},
  { path:'dressforu', component: NavbarComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},

  { path: '', redirectTo: 'dressforu', pathMatch: 'full' } // Redirection vers /dressforu


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
