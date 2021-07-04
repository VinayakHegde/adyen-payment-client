import React from "react";
import { PaymentMethods } from "../payment-methods";
import { OrderItems } from '../order-items';
import './style.css';

export const Checkout = () => {
  return (
    <main className="Checkout">
      <PaymentMethods />
      <OrderItems />
    </main>
  );
}
