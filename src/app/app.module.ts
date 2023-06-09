import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DressListComponent } from './dress-list/dress-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DressdetailComponent } from './dressdetail/dressdetail.component';
import { CategorydetailComponent} from './categorydetail/categorydetail.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddDressComponent } from './add-dress/add-dress.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatedressComponent } from './updatedress/updatedress.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';

@NgModule({
  declarations: [
    AppComponent,
    DressListComponent,
    DressdetailComponent,
    CategorydetailComponent,
    CategoriesComponent,
    AddDressComponent,
    AddCategoryComponent,
    ContactComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UpdatedressComponent,
    SearchbarComponent,
    UpdatecategoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

