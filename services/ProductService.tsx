import { Component } from 'react';
import { brands, cartItems, products } from '../data/home';

export class ProductService extends Component {
  static getProduct() {
    return products;
  }
  static getBrands() {
    return brands;
  }
  static getCartItems(loginToken: string) {
    return cartItems;
  }
  static getProductsByCategory(type: string, category: string) {
    return products[type].find((item) => item.category === category);
  }
}

export default ProductService