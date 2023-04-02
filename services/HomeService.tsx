import { Component } from 'react';
import { products } from '../data/home';

export class HomeService extends Component {
  static getProduct() {
        return products;
  }
}

export default HomeService