import React, { useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CarritoContext from '../contexto/CarritoCont';

const iniciales = c => Object.fromEntries(c.map(p => [p.id, 1]));
const totalCarrito = (c, q) =>
  c.reduce((sum, p) => sum + (p.precioConDescuento || p.price) * (q[p.id] || 1), 0);

const Carrito = () => {
  const { carrito, vaciar } = useContext(CarritoContext);
  const navigate = useNavigate();
  const [cantidades, setCantidades] = useState(iniciales(carrito));
  const cambiar = (id, n) => setCantidades(c => ({ ...c, [id]: n }));
  const total = useMemo(() => totalCarrito(carrito, cantidades), [carrito, cantidades]);
  const mostrar = total > 999.99 ? 'ERROR' : `$${total.toFixed(2)}`;

  return (
    <div className="carrito-container">
      <div className="carrito-header">
        <div>PRODUCTO</div><div>PRECIO</div><div>CANTIDAD</div><div>SUBTOTAL</div>
      </div>
      <div className="carrito-scroll">
        {carrito.map(p => (
          <CarritoItem key={p.id} producto={p} cantidad={cantidades[p.id]} cambiar={cambiar} />
        ))}
      </div>
      <div className="carrito-footer">
        <div className="carrito-total"><span>TOTAL</span><span>{mostrar}</span></div>
        <div className="carrito-actions">
          <button className="btn-vaciar" onClick={vaciar}>🗑️ Vaciar</button>
          <button className="btn-volver" onClick={() => navigate('/')}>↶ Volver</button>
          <button className="btn-pagar">$ Pagar</button>
        </div>
      </div>
    </div>
  );
};

const CarritoItem = ({ producto, cantidad, cambiar }) => {
  const { id, name, img, price, precioConDescuento } = producto;
  const precio = precioConDescuento || price;
  const subtotal = (precio * cantidad).toFixed(2);

  return (
    <div className="carrito-item">
      <div className="producto-info">
        <img src={img} alt={name} className="producto-imagen" />
        <span>{name}</span>
      </div>
      <div>
        {precioConDescuento ? (
          <>
            <span style={{ textDecoration: 'line-through' }}>${price.toFixed(2)}</span>
            <span> ${precio.toFixed(2)}</span>
          </>
        ) : (
          <span>${precio.toFixed(2)}</span>
        )}
      </div>
      <select value={cantidad} onChange={e => cambiar(id, +e.target.value)}>
        {[...Array(9)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
      </select>
      <div>${subtotal}</div>
    </div>
  );
};

export default Carrito;