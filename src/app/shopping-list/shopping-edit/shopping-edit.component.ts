import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recepes/recipe.model';
import {Ingridient} from '../../shared/ingridient.model';
import {ShoppingListService} from '../../services/shoppingList.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() whenAddBtnClickEvent = new EventEmitter<Ingridient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  whenAddBtnClick(name: HTMLInputElement , amount: HTMLInputElement){
    if (name.value != '' && amount.value != '') {
      const ingridient: Ingridient = new Ingridient(name.value, +amount.value);
      name.value = '';
      amount.value = '';
      this.shoppingListService.addIngridient(ingridient);
    }
  }

  onSubmit(form: NgForm){
    console.log(form);


  }

}
