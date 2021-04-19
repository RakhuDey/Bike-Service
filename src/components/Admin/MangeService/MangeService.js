import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import AdminNav from "../../Shared/AdminNav/AdminNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const ManageService = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("https://boiling-caverns-61336.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);

  const deleteProduct = (id) => {
    console.log("this id:", id);
    fetch(`https://boiling-caverns-61336.herokuapp.com/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully");
      });
  };
  return (
    <div className="manageService row">
      <div className="col-md-3">
        <AdminNav></AdminNav>
      </div>

      <div className="table col-md-9 mt-5">
        <div class="row">
          <div class="col text-brand2">Name</div>
          <div class="col text-brand2">Price</div>
          <div class="col text-brand2">Action</div>
        </div>
        <div className="dyTable">
          {allServices.map((service) => (
            <div class="row tableStyle">
              <div class="col text-brand">{service.name}</div>
              <div class="col text-brand">${service.price}</div>
              <div class="col ">
                <button className="btn-brand2">
                  <FontAwesomeIcon icon={faEdit} />
                  Edit
                </button>
                <button
                  className="btn-brand2"
                  onClick={() => deleteProduct(service._id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageService;
