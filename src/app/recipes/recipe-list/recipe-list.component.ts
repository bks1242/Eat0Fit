import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe> ();
  recipes: Recipe[] = [
    new Recipe('Shahi Paneer', 'Test description for shahi paneer', 'https://bluewater.co.uk/sites/bluewater/files/styles/image_spotlight_large/public/images/spotlights/burger-cropped.jpg?itok=SeFYMFP6'),
    new Recipe('Mushroom Paneer', 'Test description for mushroom paneer', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
