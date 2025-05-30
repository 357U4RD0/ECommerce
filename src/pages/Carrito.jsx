import React, { useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CarritoContext from '../contexto/CarritoCont';

const Carrito = () => {
  const navigate = useNavigate();
  const { carrito } = useContext(CarritoContext);
  const [cantidades, setCantidades] = useState(
    carrito.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );

  const cambiarCant = (id, nuevaCantidad) => {
    setCantidades(prev => ({ ...prev, [id]: nuevaCantidad }));
  };

  const total = useMemo(() => {
    return carrito.reduce(
      (acc, p) => acc + p.price * (cantidades[p.id] || 1),
      0
    );
  }, [carrito, cantidades]);

  return (
    <div className="carrito-container">
      <div className="carrito-header">
        <div>PRODUCTO</div><div>PRECIO</div><div>CANTIDAD</div><div>SUBTOTAL</div>
      </div>

      {carrito.map(p => (
        <div className="carrito-item" key={p.id}>
          <div className="producto-info">
            <img src={p.img} alt={p.name} className="producto-imagen" />
            <span>{p.name}</span>
          </div>
          <div>${p.price.toFixed(2)}</div>
          <select
            value={cantidades[p.id]}
            onChange={e => cambiarCant(p.id, parseInt(e.target.value))}
          >
            {[...Array(9)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <div>${(p.price * (cantidades[p.id] || 1)).toFixed(2)}</div>
        </div>
      ))}

      <div className="carrito-total">
        <span>TOTAL</span>
        <span>${total.toFixed(2)}</span>
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