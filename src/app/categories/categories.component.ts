import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<any>;
  category$: Observable<any>;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.categories$ = this.recipesService.getCategories();
  }
}
