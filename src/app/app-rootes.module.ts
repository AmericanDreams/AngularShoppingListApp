import {NgModule} from '@angular/core';
import {RecipeEditComponent} from './recepes/recipe-edit/recipe-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {RecipeDetailComponent} from './recepes/recipe-detail/recipe-detail.component';
import {RecepesComponent} from './recepes/recepes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const rootes: Routes  = [
  { path: '' , redirectTo: '/recipes' , pathMatch: 'full'  } ,
  { path: 'recipes' , component: RecepesComponent , children: [
      {path: 'new' , component: RecipeEditComponent},
      {path: ':id/edit' , component: RecipeEditComponent},
      {path: ':id' , component: RecipeDetailComponent}
    ]} ,
  { path: 'shopping-list' , component: ShoppingListComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(rootes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRootesModule {

}
