import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HistorialContext from '../contexto/HistorialCont';
import ProductCard from '../components/ProductCard';
import DiscountCard from '../components/DiscountCard';
import Contador from '../components/Contador';

const Historial = () => {
  const { historial } = useContext(HistorialContext);
  const navigate = useNavigate();

  return (
    <div>
      <Contador />
      <h2 style={{ textAlign: 'center', color: 'white' }}>Historial de Productos Visitados</h2>
      <div className="products-container">
        {historial.map(product =>
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

export default Historial;