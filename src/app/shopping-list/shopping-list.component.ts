import { Component, OnInit } from '@angular/core';
import {Ingridient} from '../shared/ingridient.model';
import {ShoppingListService} from '../services/shoppingList.service';
import {Subscription} from 'rxjs/Subscription';
import {OnDestroy} from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {


  ingridients: Ingridient[];
  shoppingListSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.ingridients = this.shoppingListService.getIngridient();
    this.shoppingListSub = this.shoppingListService.ingridientAddedEvent.subscribe(
      (ingridients: Ingridient[]) => {
        this.ingridients = ingridients;
      }
    );
  }


  ngOnDestroy(): void {
    this.shoppingListSub.unsubscribe();
  }

}
