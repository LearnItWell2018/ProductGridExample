import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Ingredent } from '../../shared/ingredent.model';
import {ShoppingIngredientsService} from '../shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @ViewChild('nameInput')  nameInputElement:ElementRef;
  @ViewChild('quantityInput')  quantityInputElement:ElementRef;
  constructor(private shoppingservice:ShoppingIngredientsService) { }

  ngOnInit() {
  }

  addItem(){
    this.shoppingservice.addIngridents({
      name:this.nameInputElement.nativeElement.value,
      quantity:this.quantityInputElement.nativeElement.value
    });
  }
}
