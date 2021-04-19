import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CheckOut from "../CheckOut/CheckOut";
import { faPaypal, faServicestack } from "@fortawesome/free-brands-svg-icons";

const Service = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <div
          className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
          style={{ height: "100vh" }}
        >
          <ul className="list-unstyled">
            <li>
              <Link to="/dashboard" className="">
                <FontAwesomeIcon icon={faServicestack} />
                <span>Service</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="">
                <FontAwesomeIcon icon={faPaypal} /> <span> Payment</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="">
                <FontAwesomeIcon icon={faStar} /> <span> Review</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-9">
        <CheckOut></CheckOut>
      </div>
    </div>
  );
};

export default Service;
