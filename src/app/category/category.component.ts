import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category$: Observable<any>;
  id: string;

  constructor(
    private activatedroute: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.category$ = this.filterByCategory(this.id);
  }

  filterByCategory(cat) {
    return this.recipesService.getSingleCategory(cat);
  }

}
