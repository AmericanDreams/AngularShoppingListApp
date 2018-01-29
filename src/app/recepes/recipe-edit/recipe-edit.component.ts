import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  isEditMode = false;
  recipeId: number;

  constructor(private root: ActivatedRoute) { }

  ngOnInit() {
    this.root.params.subscribe(
      (params: Params) => {
        this.isEditMode = params['id'] != null;
        this.recipeId = +params['id'];
      }
    );
  }

}
