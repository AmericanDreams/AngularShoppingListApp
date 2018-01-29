import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../services/shoppingList.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;


  constructor(private shoppingListService: ShoppingListService , private rout: ActivatedRoute , private recipeService: RecipeService , private router: Router) { }

  ngOnInit() {
    this.rout.params.subscribe(
      (params: Params) => {
        this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
      });
  }


  whenAddToShoppingListBtnClick() {

    this.shoppingListService.addRecipeIngridientToShoppingList(this.selectedRecipe.ingridients);
    this.router.navigate(['/shopping-list']);

  }

  whenEditRecipeBtnClick() {
    this.router.navigate(['/recipes' , this.selectedRecipe.id , 'edit']);
  }

}
