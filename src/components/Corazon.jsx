import { useContext, useEffect, useState } from 'react';
import FavoritosContext from '../contexto/FavoritosCont';

const Corazon = ({ product }) => {
  const { esFavorito, toggleFavorito } = useContext(FavoritosContext);
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    setFavorito(esFavorito(product.id));
  }, [esFavorito, product.id]);

  const handleClick = () => {
    toggleFavorito(product);
    setFavorito(!favorito);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: '-30px',
        left: '-40px',
        background: 'transparent',
        border: 'none',
        fontSize: '48px',
        cursor: 'pointer',
        color: favorito ? 'red' : 'gray'
      }}
    >
      ♥
    </button>
  );
};

export default Corazon;