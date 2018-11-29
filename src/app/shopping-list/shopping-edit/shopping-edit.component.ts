import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() IngredientEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient () {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    this.IngredientEvent.emit(new Ingredient(name, amount));
  }

  deleteIngredient() {

  }

  clearIngredient() {

  }

}
