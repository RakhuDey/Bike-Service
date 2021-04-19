import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="col-md-4 text-center product-item ">
      <img style={{ height: "250px" }} src={product.img} alt="" />
      <p className="mt-3 mb-3">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
