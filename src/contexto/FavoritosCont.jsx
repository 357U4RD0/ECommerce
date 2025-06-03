import { createContext, useRef } from 'react';

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const favoritosRef = useRef([]);

  const toggleFavorito = (product) => {
    const index = favoritosRef.current.findIndex(p => p.id === product.id);
    if (index >= 0) {
      favoritosRef.current.splice(index, 1);
    } else {
      favoritosRef.current.push(product);
    }
  };

  const esFavorito = (id) => {
    return favoritosRef.current.some(p => p.id === id);
  };

  return (
    <FavoritosContext.Provider value={{ favoritosRef, toggleFavorito, esFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosContext;