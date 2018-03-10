import { Ingredent } from "../shared/ingredent.model";

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredent:Ingredent[];
    
    constructor(name:string,description:string,imagePath:string,ingredent:Ingredent[]){
     this.name=name;
     this.description=description;
     this.imagePath=imagePath;
     this.ingredent=ingredent;
    }
  }