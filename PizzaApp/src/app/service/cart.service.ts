import { Injectable } from '@angular/core';

import { Pizza } from '../models/Pizza.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Pizza[] = [
    {
      id:1,
      name:'veg pizza',
      description:'njewfi asjkjf',
      price:240,
      photoPath:'assets/images/pizza1.png'
    }
  ];
  constructor() { }

  addToCart(product: Pizza) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

