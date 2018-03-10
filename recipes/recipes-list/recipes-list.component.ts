import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
import {RecipeService} from '../recipes.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[]=[];
  @Output() mainWindowRecipe=new EventEmitter<Recipe>();
  constructor(private recipeservice:RecipeService,private router:Router,private activeRouter:ActivatedRoute) { 
  }

  ngOnInit() {
    this.recipes=this.recipeservice.getRecipe();
  }

  sendUpMainWindowRcp(recipe:Recipe){
    this.mainWindowRecipe.emit(recipe);
  }

  newRecipe(){
    this.router.navigate(['new'],{relativeTo:this.activeRouter})
  }
}
