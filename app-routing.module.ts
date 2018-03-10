import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { RecipesDefaultComponent } from "./recipes/recipes-default/recipes-default.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";


const mainRoute:Routes=[
  {path:'',redirectTo:'recipes',pathMatch:'full'},  
  {path:'recipes',component:RecipesComponent,children:[
      {path:'',component:RecipesDefaultComponent},
      {path:'new',component:RecipesEditComponent},
      {path:':id',component:RecipesDetailsComponent},
      {path:':id/edit',component:RecipesEditComponent}
  ]},
  {path:'shopping',component:ShoppingListComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(mainRoute)
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{

}