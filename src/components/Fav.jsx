import React from 'react';
import { useNavigate } from 'react-router-dom';

const BotonFavoritos = () => {
  const navigate = useNavigate();

  return (
    <button className="boton-favoritos" onClick={() => navigate('/favoritos')}>
      ♥
    </button>
  );
};

export default BotonFavoritos;