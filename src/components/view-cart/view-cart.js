import React from "react";
import { Link } from "react-router-dom";

export const ViewCart = () => {
  return (
    <section className="ViewCart">
      <h2>Hello there</h2>
      <div className="order-summary">
        You have 2 items in the cart
      </div>
      <Link to={`/cart`}>
        <p className="button">View cart</p>
      </Link>
    </section>
  );
}
