import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { MealComponent } from './meal/meal.component';


const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'category/:id',
    component: CategoryComponent
  },
  {path: 'meal/:id',
    component: MealComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
