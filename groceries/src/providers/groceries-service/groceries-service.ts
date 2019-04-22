import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {

  items: any = [];
  /*
  items = [
    {
        name: "Milk",
        quantity: 2
    },
    {
        name: "Bread",
        quantity: 1
    },
    {
        name: "Banana",
        quantity: 3
    },
    {
        name: "Sugar",
        quantity: 1
    },
  ];
  */


  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);

  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index) {
    this.items[index] = item;
  }


















}
