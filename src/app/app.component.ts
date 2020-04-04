import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipesService } from './recipes.service';
import { tap, map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private recipesService: RecipesService) {

  }

  ngOnInit(): void {
  }
}
