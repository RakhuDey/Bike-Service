import React from "react";
import "./ServiceDetail.css";
import { Link } from "react-router-dom";

const ServiceDetail = ({ service }) => {
  const id = service._id;
  return (
    <Link
      to={`/checkout/${id}`}
      service={service}
      key={service.id}
      className="col-md-4 text-center service-item "
    >
      <img style={{ height: "50px" }} src={service.imageURL} alt="" />
      <h5 className="mt-3 mb-3">{service.name}</h5>
      <p className="text-secondary">{service.description}</p>
      <p>
        <b> Price: $ {service.price}</b>
      </p>
    </Link>
  );
};

export default ServiceDetail;
