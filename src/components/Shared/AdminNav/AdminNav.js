import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faPlus,
  faList,
  faUser,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div>
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          <li>
            <Link to="/" className="">
              <FontAwesomeIcon icon={faHome} /> <span> Home</span>
            </Link>
            <Link to="/order" className="">
              <FontAwesomeIcon icon={faList} /> <span> OrderList</span>
            </Link>
          </li>
          <li>
            <Link to="/addServices" className="">
              <FontAwesomeIcon icon={faPlus} /> <span> AddService</span>
            </Link>
          </li>
          <li>
            <Link to="/makeAdmin" className="">
              <FontAwesomeIcon icon={faUser} /> <span> MakeAdmin</span>
            </Link>
          </li>
          <li>
            <Link to="/mangeServices" className="">
              <FontAwesomeIcon icon={faGripHorizontal} />
              <span>MangeServices</span>
            </Link>
          </li>
        </ul>
      </div>{" "}
    </div>
  );
};

export default AdminNav;
