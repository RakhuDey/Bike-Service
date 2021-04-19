import React from "react";

const OrderList = ({ order }) => {
  console.log("order from orderStatus: ", order);
  let updateOrder = {
    description: order.description,
    imageURL: order.imageURL,
    name: order.name,
    price: order.price,
    userEmail: order.userEmail,
    userName: order.userName,
  };

  const handleProcessing = (id) => {
    updateOrder = {
      description: order.description,
      imageURL: order.imageURL,
      name: order.name,
      price: order.price,
      userEmail: order.userEmail,
      userName: order.userName,
      status: "processing",
    };

    fetch("https://boiling-caverns-61336.herokuapp.com/updateOrder/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("handle process button data: ", data);
      });
  };
  const handleDone = (id) => {
    updateOrder = {
      description: order.description,
      imageURL: order.imageURL,
      name: order.name,
      price: order.price,
      userEmail: order.userEmail,
      userName: order.userName,
      status: "Done",
    };

    fetch("https://boiling-caverns-61336.herokuapp.com/updateOrder/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("handle process button data: ", data);
      });
  };
  return (
    <div class="col-md-9 d-flex mt-2 p-2">
      <div class="col">{order.name}</div>
      <div class="col">{order.userName}</div>
      <div class="col">{order.userEmail}</div>
      <div class="col">${order.price}</div>
      <div class="col">{order.status}</div>
      <div class="col">
        <button onClick={() => handleProcessing(order._id)} class=" btn-brand2">
          Processing
        </button>
        <button onClick={() => handleDone(order._id)} class="ml-2 btn-brand2">
          Done
        </button>
      </div>
    </div>
  );
};

export default OrderList;
