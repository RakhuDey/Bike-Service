import React from "react";
import "./TestimonialDetail.css";

const TestimonialDetail = ({ testimonial }) => {
  return (
    <div className="col-md-4 text-center testimonial-item mb-3 ">
      <img src={testimonial.img} alt="" />
      <p>{testimonial.description}</p>
      <h5 className="mt-3 mb-3">{testimonial.name}</h5>
      <p>
        <small>{testimonial.title}</small>
      </p>
    </div>
  );
};

export default TestimonialDetail;
