import React from "react";
import TestimonialDetail from "../TestimonialDetail/TestimonialDetail";
import owner from "../../../images/owner.jpg";

const Testimonial = () => {
  const testimonialData = [
    {
      img: owner,
      description:
        "Don’t think ! Just go for it, it is an awesome working. What a great work done by engineer. I am very happy with this work. Thank you so much for providing such a nice piece",
      name: "Rakhu",
      title: "Owner",
    },
    {
      img: owner,
      description:
        "All kinds of vehicles need specialized technicians that perform maintenance and repair tasks. This goes for motorcycle technicians as well who handle a series of repair and maintenance activities on small engines.",
      name: "Bipro",
      title: "Engineer",
    },
    {
      img: owner,
      description:
        "All kinds of vehicles need specialized technicians that perform maintenance and repair tasks. This goes for motorcycle technicians as well who handle a series of repair and maintenance activities on small engines. and helping me my senior engineer",
      name: "Salman",
      title: "Helper",
    },
  ];
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h2 style={{ color: "#1CC7C1" }}>Testimonial</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-70 row mt-5 pt-5">
          {testimonialData.map((testimonial) => (
            <TestimonialDetail
              testimonial={testimonial}
              key={testimonial.name}
            ></TestimonialDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
