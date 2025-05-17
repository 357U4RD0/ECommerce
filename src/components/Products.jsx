import React from "react";
import { data } from "../data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="products-container">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;