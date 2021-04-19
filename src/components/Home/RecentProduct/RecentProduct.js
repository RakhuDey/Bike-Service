import React from "react";
import recent1 from "../../../images/recent (1).jpg";
import recent2 from "../../../images/recent (2).jpg";
import recent3 from "../../../images/recent (3).jpg";
import recent4 from "../../../images/recent (4).jpg";
import recent5 from "../../../images/recent (5).jpg";
import recent6 from "../../../images/recent (6).jpg";
import ProductDetail from "../ProductDetail/ProductDetail";
const RecentProduct = () => {
  const recentProducts = [
    {
      img: recent1,
      price: 199500,
    },
    {
      img: recent2,
      price: 399500,
    },
    {
      img: recent3,
      price: 655500,
    },
    {
      img: recent4,
      price: 889500,
    },
    {
      img: recent5,
      price: 1000000,
    },
    {
      img: recent6,
      price: 1200000,
    },
  ];

  return (
    <section className="recent-container mt-5">
      <div className="text-center">
        <h2 style={{ color: "#1CC7C1", fontFamily: "monospace" }}>
          Most recent products released
        </h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {recentProducts.map((product) => (
            <ProductDetail product={product} key={product.name}></ProductDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProduct;
