import React from 'react';
import Products from '../components/Products';

const Listado = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center', color: "white"}}>TIENDA DE VIDEOJUEGOS</h1>
      <h2 style={{textAlign: 'center', color: "white"}}>LISTADO DE PRODUCTOS</h2>
      <Products />
      <h2 style={{textAlign: 'center', color: "white"}}>JUEGOS EN DESCUENTO</h2>
    </div>
  );
};

export default Listado;