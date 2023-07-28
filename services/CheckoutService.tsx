import { Component } from "react";
import { paymentType } from "../data/payment";

export class PaymentService extends Component {
  static paymentType() {
    return paymentType;
  }
}

export default PaymentService;
