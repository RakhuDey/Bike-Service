import React from "react";
const ReviewsDetails = ({ review }) => {
  return (
    <div className="col-md-4 text-center service-item ">
      <img
        className="imgStyle"
        style={{ height: "50px" }}
        src={review.imageURL}
        alt=""
      />
      <h5 className="mt-3 mb-3">{review.name}</h5>
      <p className="text-secondary">{review.description}</p>
    </div>
  );
};

export default ReviewsDetails;
