import React from 'react';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
  const navigate = useNavigate();
  
  return (
    <div className="carrito-container">
      <div className="carrito-header">
        <div>PRODUCTO</div><div>PRECIO</div><div>CANTIDAD</div><div>SUBTOTAL</div>
      </div>
      <div className="carrito-item">
        <div className="producto-info">
          <img src="/ruta-a-tu-imagen.jpg" alt="Producto" className="producto-imagen" />
          <span>PRODUCTO C</span>
        </div>
        <div>$54.99</div>
        <select>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <div>$54.99</div>
      </div>
      <div className="carrito-total">
        <span>TOTAL</span>
        <span>$54.99</span>
      </div>
      <div className="carrito-actions">
        <button className="btn-vaciar">🗑️ Vaciar</button>
        <button className="btn-volver" onClick={() => navigate('/')}>↶ Volver</button>
        <button className="btn-pagar">$ Pagar</button>
      </div>
    </div>
  );
};

export default Carrito;