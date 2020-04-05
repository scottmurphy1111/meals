import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  readonly ROOT_URL = 'https://www.themealdb.com/api/json/v1/1/';
  ingredients$ = new BehaviorSubject<{}>({});
  amounts$ = new BehaviorSubject<{}>({});

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
        return this.constructMeal(val);
      }),
      tap((val) => {
        this.ingredients$.next(this.getList(val, 'strIngredient'));
        this.amounts$.next(this.getList(val, 'strMeasure'));
      })
    );
  }

  constructMeal(val) {
    return val.meals;
  }

  getList(fullMeal: {}, stringName = ''): {} {
    const mealItem = fullMeal[0];
    return Object.values(Object.keys(mealItem)
      .filter(val => {
        if (mealItem[val]) {
          const value = val.startsWith(stringName);
          return value;
        }
      })
      .reduce((acc, key) => {
        return (acc[key] = mealItem[key], acc);
      }, {} ));
  }
}
