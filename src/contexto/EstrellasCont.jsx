import { createContext, useState } from 'react';

const EstrellasContext = createContext();

export const EstrellasProvider = ({ children }) => {
  const [estrellas, setEstrellas] = useState({});

  const Puntuacion = (id, valor) => {
    setEstrellas(prev => ({ ...prev, [id]: valor }));
  };

  return (
    <EstrellasContext.Provider value={{ estrellas, Puntuacion }}>
      {children}
    </EstrellasContext.Provider>
  );
};

export default EstrellasContext;