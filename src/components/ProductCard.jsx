import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CarritoContext from '../contexto/CarritoCont';
import EstrellasContext from '../contexto/EstrellasCont';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CarritoContext);
  const { estrellas } = useContext(EstrellasContext);
  const puntuacion = estrellas[product.id] || 5;

  const irADetalles = () => {
    navigate(`/detalles/${product.id}`);
  };

  const agregarProducto = () => {
    addToCart(product);
    console.log(`${product.name} añadido al carrito`);
  };

  return (
    <div className="card">
      <img onDoubleClick={irADetalles} src={product.img} alt={product.name} className="card-img" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p>⭐ {puntuacion} </p>
      <button onClick={agregarProducto}>Añadir</button>
    </div>
  );
};

export default ProductCard;