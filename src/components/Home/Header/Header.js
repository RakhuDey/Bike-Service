import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container img-fluid text-center mt-5 ">
      <h1 style={{ color: "#12232E", marginTop: "20px" }}>Bike Servicing</h1>
      <p style={{ color: "#12232E" }} className="mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
        necessitatibus magnam asperiores tenetur sed assumenda perferendis
        cupiditate quia ratione minus!
      </p>
      <br />
      <Link to="/addReview">
        <button className="mt-5 btn-brand">Service Update</button>
      </Link>
    </div>
  );
};

export default Header;
