import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipes.service'
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Input() id:number;
  constructor(private recipeservice:RecipeService) { }

  ngOnInit() {
  }
  
  bringOnWideScreen(val){
    this.recipeservice.mainWindowRecipe.emit(this.recipe);
  }
}
