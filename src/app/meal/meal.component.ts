import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  meal$: Observable<any>;
  ingredients$: Observable<any>;
  amounts$: Observable<any>;
  id: string;

  constructor(
    private activatedroute: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.meal$ = this.filterMeal(this.id);
    this.ingredients$ = this.recipesService.ingredients$;
    this.amounts$ = this.recipesService.amounts$;
  }

  filterMeal(cat) {
    return this.recipesService.getMeal(cat);
  }
}
