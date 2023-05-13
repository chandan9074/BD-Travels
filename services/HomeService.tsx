import { Component } from 'react';
import { brands, cartItems, products } from '../data/home';

export class HomeService extends Component {
  static getProduct() {
    return products;
  }
  static getBrands() {
    return brands;
  }
  static getCartItems(loginToken: string) {
    return cartItems;
  }
}

export default HomeService