import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";

const CheckOutForm = ({ orders }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  //console.log('this is cart from process payment: ', cart);
  let ordersInfo = {
    ...orders,
    userName: loggedInUser.name,
    userEmail: loggedInUser.email,
  };
  let updateOrderInfo = {
    description: ordersInfo.description,
    imageURL: ordersInfo.imageURL,
    name: ordersInfo.name,
    price: ordersInfo.price,
    userEmail: ordersInfo.userEmail,
    userName: ordersInfo.userName,
  };
  //console.log('orders Info: ', ordersInfo);
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      setPaymentSuccess(paymentMethod.id);
      ordersInfo = {
        ...updateOrderInfo,
        status: "pending",
      };
      let result = ordersInfo;
      console.log("result: ", result);
      fetch("https://boiling-caverns-61336.herokuapp.com/addOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("handle save data: ", data);
        });
      //console.log('order details ', ordersInfo);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        className="btn-brand2 text-center mt-3"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && <p style={{ color: "green" }}>Payment Successfull</p>}
    </form>
  );
};
export default CheckOutForm;
