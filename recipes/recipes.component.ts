import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipes.model';
import {RecipeService} from './recipes.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  bigScreenRecipe:Recipe;
  constructor(private recipeservices:RecipeService) {

   }

  ngOnInit() {
    this.recipeservices.mainWindowRecipe.subscribe((recipeData)=>{
      this.bigScreenRecipe=recipeData;
    })
  }
}
