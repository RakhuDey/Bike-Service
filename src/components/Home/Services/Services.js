import React, { useState, useEffect } from "react";
import wash from "../../../images/motorcycle.png";
import engine from "../../../images/engine.png";
import clutch from "../../../images/clutch-disc.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

// const serviceData = [
//   {
//     id: 1,
//     name: "MotorCycle Wash",
//     icon: wash,
//     description:
//       " Our services is the best service and all of product is genuine",
//     price: 100,
//   },
//   {
//     id: 2,
//     name: "Engine Service",
//     icon: engine,
//     description:
//       " Our services is the best service and all of product is genuine",
//     price: 1000,
//   },
//   {
//     id: 3,
//     name: "Clutch-Disc Service",
//     icon: clutch,
//     description:
//       " Our services is the best service and all of product is genuine",
//     price: 500,
//   },
// ];

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://boiling-caverns-61336.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {services.map((service) => (
            <ServiceDetail service={service} key={service.name}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
