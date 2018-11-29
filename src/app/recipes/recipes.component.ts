import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(event) {
    console.log('RecipeSelected');
    this.selectedRecipe = event;
  }
}
