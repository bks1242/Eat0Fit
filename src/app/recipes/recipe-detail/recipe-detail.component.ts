import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropDownDirective } from '../../shared/dropdown.directive';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
