import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Payment } from "./features/payment/Payment";
import { Preview } from "./features/preview/Preview";
import { Status } from "./features/status/Status";
import "./App.css";
import { getConfiguration } from "./app/paymentSlice";
import { ViewCart } from "./components/view-cart";
import { Checkout } from "./components/checkout";

function App() {
  useEffect(() => {
    getConfiguration();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/cart">
          <Preview />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/preview/:type">
          <Preview />
        </Route>
        <Route path="/checkout/:type">
          <Payment />
        </Route>
        <Route path="/status/:type">
          <Status />
        </Route>
        <Route path="/">
          <ViewCart />
          {/* <Demo /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
