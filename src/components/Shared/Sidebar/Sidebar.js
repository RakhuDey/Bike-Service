import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          <li>
            <Link to="/dashboard" className="">
              <FontAwesomeIcon icon={faGripHorizontal} />
              <span>Service</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="">
              <FontAwesomeIcon icon={faHome} /> <span> Home</span>
            </Link>
          </li>
          <li>
            <Link to="/addReview" className="">
              <FontAwesomeIcon icon={faHome} /> <span> Review</span>
            </Link>
          </li>
        </ul>
      </div>{" "}
    </div>
  );
};

export default Sidebar;
