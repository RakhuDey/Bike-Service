import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import ReviewsDetails from "../ReviewDetail/ReviewDetail";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState();
  useEffect(() => {
    fetch("https://boiling-caverns-61336.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR REVIEWS</h5>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {reviews.map((review) => (
            <ReviewsDetails review={review} key={review._id}></ReviewsDetails>
          ))}
        </div>
      </div>
    </section>

    /* <div className="text-center">
        {[...Array(5)].map((star, i) => {
          const ratingValue = 1 + i;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                size={100}
              ></FaStar>
            </label>
          );
        })}
      </div> */
  );
};

export default Review;
