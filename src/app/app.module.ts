import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecepesComponent} from './recepes/recepes.component';
import {RecipeListComponent} from './recepes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recepes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recepes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {RecipeService} from './services/recipe.service';
import {ShoppingListService} from './services/shoppingList.service';
import {Router, RouterModule, Routes} from '@angular/router';
import { RecipeEditComponent } from './recepes/recipe-edit/recipe-edit.component';
import {AppRootesModule} from './app-rootes.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, RecepesComponent, RecipeListComponent,
    RecipeDetailComponent, RecipeItemComponent, ShoppingListComponent, ShoppingEditComponent ,
    DropdownDirective,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule ,
    AppRootesModule ,
    FormsModule
  ],
  providers: [RecipeService , ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
