import React, { useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CarritoContext from '../contexto/CarritoCont';

const generarCantidadesIniciales = c => c.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {});
const calcularTotal = (c, q) =>
  c.reduce((acc, p) => {
    const precio = p.precioConDescuento || p.price;
    return acc + precio * (q[p.id] || 1);
  }, 0);

const Carrito = () => {
  const { carrito, vaciar } = useContext(CarritoContext);
  const navigate = useNavigate();
  const [cantidades, setCantidades] = useState(generarCantidadesIniciales(carrito));
  const total = useMemo(() => calcularTotal(carrito, cantidades), [carrito, cantidades]);

  const mostrarTotal = total > 999.99 ? 'ERROR' : `$${total.toFixed(2)}`;
  const cambiarCantidad = (id, n) => setCantidades(c => ({ ...c, [id]: n }));

  return (
    <div className="carrito-container">
      <div className="carrito-header">
        <div>PRODUCTO</div><div>PRECIO</div><div>CANTIDAD</div><div>SUBTOTAL</div>
      </div>
      <div className="carrito-scroll">
        {carrito.map(p => {
          const precio = p.precioConDescuento || p.price;
          const cantidad = cantidades[p.id] || 1;
          return (
            <div className="carrito-item" key={p.id}>
              <div className="producto-info">
                <img src={p.img} alt={p.name} className="producto-imagen" />
                <span>{p.name}</span>
              </div>
              <div>
                {p.precioConDescuento ? (
                  <>
                    <span style={{ textDecoration: 'line-through', marginRight: '4px' }}>${p.price.toFixed(2)}</span>
                    <span>${precio.toFixed(2)}</span>
                  </>
                ) : (
                  <span>${precio.toFixed(2)}</span>
                )}
              </div>
              <select value={cantidad} onChange={e => cambiarCantidad(p.id, +e.target.value)}>
                {[...Array(9)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
              </select>
              <div>${(precio * cantidad).toFixed(2)}</div>
            </div>
          );
        })}
      </div>
      <div className="carrito-footer">
        <div className="carrito-total"><span>TOTAL</span><span>{mostrarTotal}</span></div>
        <div className="carrito-actions">
          <button className="btn-vaciar" onClick={vaciar}>🗑️ Vaciar</button>
          <button className="btn-volver" onClick={() => navigate('/')}>↶ Volver</button>
          <button className="btn-pagar">$ Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;