import React from "react";

function Product(props) {
  return (
    <div className="card">
      <h3>{props.product.name}</h3>

      <p>£{parseFloat(props.product.price).toFixed(2)}</p>

      <p>{props.product.description}</p>
    </div>
  );
}

export default Product;
