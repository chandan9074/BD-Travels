import { Component } from 'react';
import { brands, products } from '../data/home';

export class HomeService extends Component {
  static getProduct() {
        return products;
  }
  static getBrands() {
    return brands;
  }
}

export default HomeService