import { createSlice } from "@reduxjs/toolkit";
import { endpoints } from './endpoints';

export const slice = createSlice({
  name: "payment",
  initialState: {
    error: "",
    paymentMethodsRes: null,
    paymentRes: null,
    paymentDetailsRes: null,
    config: null,
    type: null,
  },
  reducers: {
    configuration: (state, action) => {
      const [res, status] = action.payload;
      if (status >= 300) {
        state.error = res;
      } else {
        state.config = res
      }
    },
    paymentMethods: (state, action) => {
      const [res, status] = action.payload;
      if (status >= 300) {
        state.error = res;
      } else {
        res.paymentMethods = res.paymentMethods.filter((it) =>
          ["eps", "scheme", "dotpay", "giropay", "ideal", "directEbanking", "bcmc", "paysafecard"].includes(it.type)
        );
        state.paymentMethodsRes = res;
      }
    },
    payments: (state, action) => {
      const [res, status] = action.payload;
      if (status >= 300) {
        state.error = res;
      } else {
        state.paymentRes = res;
      }
    },
    paymentDetails: (state, action) => {
      const [res, status] = action.payload;
      if (status >= 300) {
        state.error = res;
      } else {
        state.paymentDetailsRes = res;
      }
    },
    paymentType: (state, action) => {
      state.type = action.payload;
    }
  },
});

export const { configuration, paymentMethods, payments, paymentDetails, paymentType } = slice.actions;

export const getConfiguration = () => async (dispatch) => {
  const response = await fetch(endpoints.config, {
    method: "GET",
  });
  return dispatch(configuration([await response.json(), response.status]));
};

export const getPaymentMethods = () => async (dispatch) => {
  const response = await fetch(endpoints.paymentMethods, {
    method: "POST",
  });
  dispatch(paymentMethods([await response.json(), response.status]));
};

export const initiatePayment = (data) => async (dispatch) => {
  const response = await fetch(endpoints.payments, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  dispatch(payments([await response.json(), response.status]));
};

export const submitAdditionalDetails = (data) => async (dispatch) => {
  const response = await fetch(endpoints.paymentsDetails, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  dispatch(paymentDetails([await response.json(), response.status]));
};

export const setPaymentType = (flag) => (dispatch) => {
  dispatch(paymentType(flag))
}

export default slice.reducer;
