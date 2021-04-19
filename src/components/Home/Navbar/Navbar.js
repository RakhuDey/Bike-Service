import React from "react";
import { Link } from "react-router-dom";
import clutch from "../../../images/clutch-disc.png";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <h1>
          <img
            style={{
              width: "50px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
            src={clutch}
            alt=""
          />
          Bike-Service
        </h1>
      </div>
      <div className="col-md-8">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <Link className="nav-link mr-5 text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5 text-white" to="/login">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5 text-white" to="/addReview">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5 text-white" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5 text-white" to="#">
                  Contract
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5 text-white" to="makeAdmin">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
