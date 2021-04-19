import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckOutForm/CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51Ih8qHFlWQ5EuVx0isi64nwdMupDY4mwKtiLHwljyox6IF2YuERpwAbxiZxhupo2iiwHlPWFZWGiIaIPSzs5wuQI00nSMoHSaN"
);

const Payment = ({ orders }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm orders={orders}></CheckoutForm>
    </Elements>
  );
};

export default Payment;
