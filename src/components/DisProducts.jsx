import juegosConDescuento from '../data2';
import DiscountCard from './DiscountCard';

const DisProducts = () => (
  <div className="products-container">
    {juegosConDescuento.map(p => (
      <DiscountCard key={p.id} product={p} />
    ))}
  </div>
);

export default DisProducts;