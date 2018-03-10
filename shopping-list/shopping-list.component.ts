import { Component, OnInit } from '@angular/core';
import { Ingredent } from '../shared/ingredent.model';
import {ShoppingIngredientsService} from './shopping.service'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredent[]=[]
  constructor(private shoppingService:ShoppingIngredientsService){}
  ngOnInit() {
   this.ingredients= this.shoppingService.getIngredients();
   this.shoppingService.ingredientsChanged.subscribe((ingredientArray)=>{
    this.ingredients=ingredientArray;
   });
  }

}
