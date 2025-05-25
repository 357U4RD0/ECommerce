import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CarritoContext from '../contexto/CarritoCont';

const DiscountCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CarritoContext);

  return (
    <div className="card relative">
      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
        -{product.descuento}%
      </div>
      <img onDoubleClick={() => navigate(`/detalles/${product.id}`)} src={product.img} alt={product.name} className="card-img" />
      <h3>{product.name}</h3>
      <p className="text-green-600 font-bold">${product.precioConDescuento}</p>
      <p className="line-through text-sm text-gray-500">${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Añadir</button>
    </div>
  );
};

export default DiscountCard;