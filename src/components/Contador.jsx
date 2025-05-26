import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CarritoContext from '../contexto/CarritoCont';

const Contador = () => {
  const { contador } = useContext(CarritoContext);
  const navigate = useNavigate();

  const irAlCarrito = () => {
    navigate('/carrito');
  };

  return (
    <button className="contador" onClick={irAlCarrito} aria-label="Ir al carrito" title="Ir al carrito">
      {contador}
    </button>
  );
};

export default Contador;