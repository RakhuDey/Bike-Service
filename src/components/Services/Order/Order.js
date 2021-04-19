import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AdminNav from "../../Shared/AdminNav/AdminNav";
import OrderList from "../../Admin/OrderList/OrderList";

const Order = () => {
  const [allOrder, setAllOrder] = useState([]);
  useEffect(() => {
    fetch("https://boiling-caverns-61336.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllOrder(data);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-md-3">
        <AdminNav></AdminNav>
      </div>
      <div className="col-md-9">
        <div class="row bg-light mt-5 p-3 border-bottom">
          <div class="col text-brand2">Service Name</div>
          <div class="col text-brand2">Customer Name</div>
          <div class="col text-brand2">Email</div>
          <div class="col text-brand2">Price</div>
          <div class="col text-brand2">Status</div>
          <div class="col text-brand2">Check</div>
        </div>

        <div className="row d-flex">
          {allOrder.map((order) => (
            <OrderList order={order}></OrderList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
