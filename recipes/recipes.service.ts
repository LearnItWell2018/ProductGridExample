import {Output,EventEmitter} from '@angular/core'
import {Recipe} from './recipes.model'
import { Ingredent } from '../shared/ingredent.model';
export class RecipeService{
    private recipes : Recipe[]=[];
    mainWindowRecipe=new EventEmitter<Recipe>();
    constructor(){
    this.recipes.push(new Recipe('Lemon Chicken',
                                 'Inspired by Greek avgolemono, this recipe yields a creamy, comforting, bright bowl of soup that delivers everything we want when feeling a little under the weather.',
                                 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis',
                                 [
                                     new Ingredent('Chicken',500),
                                     new Ingredent('Lemon',4),
                                     new Ingredent('Spring Onion',5),
                                     new Ingredent('Butter',500)])
                                );
    this.recipes.push(new Recipe('Sautéed Salmon With Leeks and Tomatoes Recipe ',
                                'Here is a fresh and simple way to prepare salmon that is ready in about 20 minutes Most of that time will be spent preparing the vegetables You do have to blanc.',
                                'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg',
                                [
                                    new Ingredent('Salmon',500),
                                    new Ingredent('Leaks',4),
                                    new Ingredent('Tomato',5),
                                    new Ingredent('Corriander',50)])
                               );
    }
    
    getRecipe(){
        return this.recipes.slice();
    }

}