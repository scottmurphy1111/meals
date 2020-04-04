import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  readonly ROOT_URL = 'https://www.themealdb.com/api/json/v1/1/';
  ingredients$: Observable<string[]>;

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get<any>(this.ROOT_URL + 'categories.php').pipe(
      map(val => {
        return this.constructCategories(val);
      })
    );
  }

  constructCategories(val) {
    return val.categories;
  }

  getSingleCategory(category: string) {
    return this.http.get<any>(`${this.ROOT_URL}filter.php?c=${category}`).pipe(
      map(val => {
        return this.constructCategory(val);
      })
    );
  }

  constructCategory(val) {
    return val.meals;
  }

  getMeal(id: string) {
    return this.http.get<any>(`${this.ROOT_URL}lookup.php?i=${id}`).pipe(
      map(val => {
        console.log('vale', val);
        return this.constructMeal(val);
      }),
      // tap(val => {
      //   this.ingredients$ = this.getIngredients(val);
      // })
    );
  }

  constructMeal(val) {
    return val.meals;
  }

  getIngredients(meal) {
    console.log('meallll', meal);
    return Object.keys(meal[0]).filter(item => {
      item.includes('strIngredient');
    });
  }
}
