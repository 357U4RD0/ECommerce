import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CarritoContext from '../contexto/CarritoCont';

const Carrito = () => {
  const navigate = useNavigate();
  const { carrito } = useContext(CarritoContext);

  const total = carrito.reduce((acc, p) => acc + p.price * (p.quantity || 1), 0);

  return (
    <div className="carrito-container">
      <div className="carrito-header">
        <div>PRODUCTO</div><div>PRECIO</div><div>CANTIDAD</div><div>SUBTOTAL</div>
      </div>

      {carrito.map(producto => (
        <div className="carrito-item" key={producto.id}>
          <div className="producto-info">
            <img src={producto.img} alt={producto.name} className="producto-imagen" />
            <span>{producto.name}</span>
          </div>
          <div>${producto.price.toFixed(2)}</div>
          <select defaultValue={producto.quantity || 1}>
            {[...Array(9)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <div>${(producto.price * (producto.quantity || 1)).toFixed(2)}</div>
        </div>
      ))}

      <div className="carrito-total">
        <span>TOTAL</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="carrito-actions">
        <button className="btn-vaciar">🗑️ Vaciar</button>
        <button className="volver-btn" onClick={() => navigate('/')}>↶ Volver</button>
        <button className="btn-pagar">$ Pagar</button>
      </div>
    </div>
  );
};

export default Carrito;