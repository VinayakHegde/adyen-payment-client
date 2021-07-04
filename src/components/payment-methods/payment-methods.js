import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentType } from "../../app/paymentSlice";
import { Payment } from "../payment";
import './style.css';

const availablePayments = [
  { type: "card", displayName: "Card" },
  { type: "ideal", displayName: "iDeal" },
  { type: "giropay", displayName: "GiroPay" },
  { type: "dotpay", displayName: "DotPay" },
  { type: "eps", displayName: "EPS" },
  { type: "directEbanking", displayName: "Sofort" },
  { type: "bcmc", displayName: "Bancontact card" },
  { type: "paysafecard", displayName: "PaySafeCard" },
];

export const PaymentMethods = () => {
  const dispatch = useDispatch();
  const { type } = useSelector(state => state.payment);
  const onClick = paymentType => {
    if (type === paymentType) return;

    dispatch(setPaymentType(paymentType))
  }
  return (
    <section className="PaymentMethods">
      <h2>Payment Methods</h2>
      <ul className="PaymentMethods-container">
        {availablePayments.map(({ type: t, displayName }) => (
          <li className={`PaymentMethods-item ${type === t ? 'PaymentMethods-selected' : ''}`} key={t} onClick={() => onClick(t)}>
            <div className="PaymentMethods-name">{displayName}</div>
            {type === t && (<Payment />)}
          </li>
        ))}
      </ul>
    </section>

  );
}
