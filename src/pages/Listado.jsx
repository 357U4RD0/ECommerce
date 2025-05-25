import React from 'react';
import Products from '../components/Products';
import DisProducts from '../components/DisProducts';
import Contador from '../components/Contador';

const Listado = () => {
  return (
    <div>
      <Contador />
      <h1 style={{textAlign: 'center', color: "white"}}>TIENDA DE VIDEOJUEGOS</h1>
      <h2 style={{textAlign: 'center', color: "white"}}>LISTADO DE PRODUCTOS</h2>
      <Products />
      <h2 style={{textAlign: 'center', color: "white"}}>JUEGOS EN DESCUENTO</h2>
      <DisProducts />
    </div>
  );
};

export default Listado;