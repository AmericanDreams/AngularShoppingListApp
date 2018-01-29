import { OnInit} from '@angular/core';
import {Ingridient} from '../shared/ingridient.model';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';


export class ShoppingListService implements OnInit {

  private ingridients: Ingridient[] = [
    new Ingridient('Apple' , 6),
    new Ingridient('Pear' , 10)

  ];

  ingridientAddedEvent: Subject<Ingridient[]> = new Subject<Ingridient[]>();


  ngOnInit(): void {
  }

  getIngridient() {
    return this.ingridients.slice();
  }

  addIngridient(ingridient: Ingridient){
    this.ingridients.push(ingridient);
    this.ingridientAddedEvent.next(this.ingridients);
  }

  addRecipeIngridientToShoppingList(ingridients: Ingridient[]){
    this.ingridients.push(...ingridients);
    this.ingridientAddedEvent.next(this.ingridients);
  }
}
