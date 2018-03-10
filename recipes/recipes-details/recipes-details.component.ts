import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { Ingredent } from '../../shared/ingredent.model';
import { ShoppingIngredientsService } from '../../shopping-list/shopping.service'
import { ActivatedRoute,Params } from '@angular/router';
import { RecipeService } from '../recipes.service';


@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  bigScreenRecipe:Recipe;
  recipeId:number;
  constructor(private recipeService:RecipeService,private shoppingingredientservice:ShoppingIngredientsService,private activeRouter:ActivatedRoute) { }

  ngOnInit() {
   this.recipeId=+this.activeRouter.snapshot.params['id'];
   this.bigScreenRecipe=this.recipeService.getRecipe()[this.recipeId];
   this.activeRouter.params.subscribe((params:Params)=>{
    this.recipeId=params['id'];
    this.bigScreenRecipe=this.recipeService.getRecipe()[this.recipeId];
   });
  }

  addToCart(){
    let ingredent:any;
    this.bigScreenRecipe.ingredent.forEach(function(item){
      this.shoppingingredientservice.addIngridents(item)
    },this);
  }
}
