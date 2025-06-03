import { useState } from 'react';

const Corazon = () => {
  const [Favorito, setFavorito] = useState(false);
  return (
    <button
      onClick={() => setFavorito(!Favorito)}
      style={{
        position: 'absolute',
        top: '-30px',
        left: '-40px',
        background: 'transparent',
        border: 'none',
        fontSize: '48px',
        cursor: 'pointer',
        color: Favorito ? 'red' : 'gray'
      }}
    >
    ♥
    </button>
  );
};

export default Corazon;
