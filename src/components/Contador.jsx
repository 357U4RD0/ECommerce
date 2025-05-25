import React, { useContext } from 'react';
import CarritoContext from '../contexto/CarritoCont';

const Contador = () => {
  const { contador } = useContext(CarritoContext);

  return (
    <div className="contador">
      {contador}
    </div>
  );
};

export default Contador;