import { createContext, useRef } from 'react';

const Historial = createContext();

export const HistorialProvider = ({ children }) => {
  const historialRef = useRef([]);

  const registrar = (producto) => {
    if (!historialRef.current.find(p => p.id === producto.id)) {
      historialRef.current.push(producto);
    }
  };

  return (
    <Historial.Provider value={{ registrar, historial: historialRef.current }}>
      {children}
    </Historial.Provider>
  );
};

export default Historial;