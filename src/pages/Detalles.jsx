import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../data';

const Detalles = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = data.find(item => item.id === parseInt(id));

  return (
    <div className="detalles-container">
      <div className="detalles-header">
        <h2>Detalles</h2>
      </div>

      <div className="detalles-content">
        <img src={producto.img} alt={producto.name} className="detalles-img" />
        <div className="detalles-info">
          <h3 className="detalles-nombre">{producto.name}</h3>
          <p className="detalles-descripcion">{producto.description}</p>
        </div>
      </div>

      <button className="volver-btn" onClick={() => navigate('/')}> Volver </button>
    </div>
  );
};

export default Detalles;