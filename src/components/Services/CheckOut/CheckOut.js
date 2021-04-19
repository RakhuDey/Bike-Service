import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Payment from "../Payment/Payment";

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [checkout, setCheckout] = useState(false);
  const [orders, setOrders] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://boiling-caverns-61336.herokuapp.com/checkout/" + id)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data[0]);
      });
  }, [id]);

  const order = {
    ...orders,
    userName: loggedInUser.name,
    userEmail: loggedInUser.email,
  };

  const handleOrder = () => {
    setCheckout(true);
    const orderInfo = order;
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-5 mt-5 h-50%">
        <div className="col-md-4 text-center service-item ">
          <img style={{ height: "50px" }} src={orders.imageURL} alt="" />
          <h5 className="mt-3 mb-3">{orders.name}</h5>
          <p className="text-secondary">{orders.description}</p>
          <p>
            <b> Price: $ {orders.price}</b>
          </p>
          <button onClick={handleOrder} className="btn btn-primary">
            Order
          </button>
        </div>
      </div>
      <div className="col-md-4">
        {checkout && (
          <div className="mr-5">
            <h4 className="text-center text-brand2 m-5 border-bottom p-3 border-success bg-light">
              Your checkout:{" "}
            </h4>
            <Payment orders={orders}></Payment>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
