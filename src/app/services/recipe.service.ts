import {EventEmitter, OnInit} from '@angular/core';
import {Recipe} from '../recepes/recipe.model';
import {Ingridient} from '../shared/ingridient.model';
import {Subject} from 'rxjs/Subject';


export class RecipeService implements OnInit {

  private recipes: Recipe[] = [
    new Recipe(1, 'Test Recipe1' , 'Recipe Description1' , 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg') ,
    new Recipe(2, 'Test Recipe2' ,
      'Recipe Description2' ,
      'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [new Ingridient('apple' , 55)  , new Ingridient('pear' , 55) ])
  ];



  ngOnInit(): void {
  }

  public getRecipes (): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipe(id: number) {
    return this.getRecipes().find((a) => a.id === id);
  }

}
