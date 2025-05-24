import React from 'react';
import { useParams } from 'react-router-dom';

const Detalles = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Pantalla de Detalles</h2>
      <p>Producto con ID: {id}</p>
    </div>
  );
};

export default Detalles;