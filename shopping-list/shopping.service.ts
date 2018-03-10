import { Ingredent } from "../shared/ingredent.model";
import { EventEmitter, Output } from "@angular/core";

export class ShoppingIngredientsService{
     @Output() ingredientsChanged=new EventEmitter<Ingredent[]>();
     private ingredients:Ingredent[]=[];

     constructor() {
        this.ingredients.push(new Ingredent('apple',5));
        this.ingredients.push(new Ingredent('orange',10))
       }
    
    getIngredients(){
        return this.ingredients;
    }

    addIngridents(ingredent:Ingredent){
        this.ingredients.push(ingredent);
        this.ingredientsChanged.emit(this.ingredients);
    }
}