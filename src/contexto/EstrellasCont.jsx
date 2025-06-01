import React, { createContext, useState } from 'react';

const EstrellasContext = createContext();

export const EstrellasProvider = ({ children }) => {
  const [estrellas, setEstrellas] = useState({});

  const actualizarPuntuacion = (id, valor) => {
    setEstrellas(prev => ({ ...prev, [id]: valor }));
  };

  return (
    <EstrellasContext.Provider value={{ estrellas, actualizarPuntuacion }}>
      {children}
    </EstrellasContext.Provider>
  );
};

export default EstrellasContext;