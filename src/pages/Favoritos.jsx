import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoritosContext from '../contexto/FavoritosCont';
import ProductCard from '../components/ProductCard';
import DiscountCard from '../components/DiscountCard';
import Contador from '../components/Contador';

const Favoritos = () => {
  const { favoritosRef } = useContext(FavoritosContext);
  const navigate = useNavigate();

  return (
    <div>
      <Contador />
      <h2 style={{ textAlign: 'center', color: 'white' }}>Mis Favoritos</h2>
      <div className="products-container">
        {favoritosRef.current.map(product =>
          product.descuento ? (
            <DiscountCard key={product.id} product={product} />
          ) : (
            <ProductCard key={product.id} product={product} />
          )
        )}
      </div>
      <button className="volver-btn" onClick={() => navigate('/')}>
        Volver
      </button>
    </div>
  );
};

export default Favoritos;