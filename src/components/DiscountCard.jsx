import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CarritoContext from '../contexto/CarritoCont';

const DiscountCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CarritoContext);

  const irADetalles = () => {
    navigate(`/detalles/${product.id}`);
  };

  const agregarProducto = () => {
    addToCart(product);
    console.log(`${product.name} añadido al carrito`);
  };

  return (
    <div className="card">
      <span className="discount-label">-{product.descuento}%</span>
      <img onDoubleClick={irADetalles} src={product.img} alt={product.name} className="card-img" />
      <h3>{product.name}</h3>
      <p className="price-original">${product.price.toFixed(2)}</p>
      <p className="price-discount">${product.precioConDescuento.toFixed(2)}</p>
      <button onClick={agregarProducto}>Añadir</button>
    </div>
  );
};

export default DiscountCard;