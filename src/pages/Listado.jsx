import Products from '../components/Products';
import DisProducts from '../components/DisProducts';
import Contador from '../components/Contador';
import BotonFavoritos from '../components/Fav';
import BotonHistorial from '../components/Hist';

const Listado = () => {
  return (
    <div>
      <BotonFavoritos/>
      <Contador />
      <BotonHistorial />
      <h1 style={{textAlign: 'center', color: "white"}}>TIENDA DE VIDEOJUEGOS</h1>
      <h2 style={{textAlign: 'center', color: "white"}}>LISTADO DE PRODUCTOS</h2>
      <Products />
      <h2 style={{textAlign: 'center', color: "white"}}>JUEGOS EN DESCUENTO</h2>
      <DisProducts />
    </div>
  );
};

export default Listado;