import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../data';
import data2 from '../data2';
import HistorialContext from '../contexto/Historial';
import Estrellas from '../components/Estrellas';

const Detalles = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agHistorial } = useContext(HistorialContext);

  const producto = data.find(item => item.id === parseInt(id)) || data2.find(item => item.id === parseInt(id));

  useEffect(() => {
    if (producto) {
      agHistorial(producto);
    }
  }, [producto]);

  return (
    <div className="detalles-container">
      <div className="detalles-header">
        <h2>Detalles</h2>
      </div>

      <div className="detalles-content">
        <img src={producto.img} alt={producto.name} className="detalles-img" />
        <div className="detalles-info">
          <h3 className="detalles-nombre">{producto.name}</h3>
          <Estrellas id={producto.id} editable />
          <p className="detalles-descripcion">{producto.description}</p>
        </div>
      </div>

      <button className="volver-btn" onClick={() => navigate('/')}>Volver</button>
    </div>
  );
};

export default Detalles;