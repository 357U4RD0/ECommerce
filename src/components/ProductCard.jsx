import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} className="card-img" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button>Añadir</button>
    </div>
  );
};

export default ProductCard;