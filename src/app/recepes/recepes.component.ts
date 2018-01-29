import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recepes.component.html',
  styleUrls: ['./recepes.component.css']
})
export class RecepesComponent implements OnInit {


  clickedRecipe: Recipe;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }


}
