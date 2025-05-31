import React, { createContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [contador, setContador] = useState(0);
  const vaciar = () => {
    setCarrito([]);
    setContador(0);
  }

  const addToCart = (producto) => {
    const yaExiste = carrito.find(p => p.id === producto.id);
    if (!yaExiste) {
      setCarrito([...carrito, producto]);
      setContador(contador + 1);
    }
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCart, contador, vaciar }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;