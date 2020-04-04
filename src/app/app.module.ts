import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { MealComponent } from './meal/meal.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoriesComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
