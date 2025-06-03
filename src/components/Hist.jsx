import React from 'react';
import { useNavigate } from 'react-router-dom';

const BotonHistorial = () => {
  const navigate = useNavigate();

  return (
    <button className="boton-historial" onClick={() => navigate('/historial')}>
      ⏱
    </button>
  );
};

export default BotonHistorial;