import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { DropdownDirective } from './shared/custome-directives/dropdown.directive';
import { ShoppingIngredientsService } from './shopping-list/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipesDefaultComponent } from './recipes/recipes-default/recipes-default.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    RecipesItemComponent,
    DropdownDirective,
    RecipesDefaultComponent,
    RecipesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingIngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
