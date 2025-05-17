import React, {useState} from "react";

const ProductCard = ({ product }) => {
    const [count, setCount] = useState(0);

    const ClickPrueba = () => {
        setCount(cuenta => cuenta + 1);
        console.log(`${product.name} ${count + 1}`);
    }
  
  
    return (
    <div className="card">
      <img src={product.img} alt={product.name} className="card-img" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick = {ClickPrueba}>Añadir</button>
    </div>
  );
};

export default ProductCard;