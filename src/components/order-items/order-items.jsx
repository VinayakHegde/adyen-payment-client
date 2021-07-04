import React from "react";
import './style.css';

export const OrderItems = ({ children }) => {
  return (
    <section className="OrderItems">
      <h2>Cart</h2>
      <div className="order-summary">
        <ul className="order-summary-list">
          <li className="order-summary-list-list-item">
            <img src="/images/sunglasses.png" className="order-summary-list-list-item-image" alt="" />
            <p className="order-summary-list-list-item-title">Sunglasses</p>
            <p className="order-summary-list-list-item-price">5.00</p>
          </li>
          <li className="order-summary-list-list-item">
            <img src="/images/headphones.png" className="order-summary-list-list-item-image" alt="" />
            <p className="order-summary-list-list-item-title">Headphones</p>
            <p className="order-summary-list-list-item-price">5.00</p>
          </li>
        </ul>
      </div>
      {children}
    </section>
  );
}
