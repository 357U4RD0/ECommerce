import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listado from './pages/Listado';
import Detalles from './pages/Detalles';
import Carrito from './pages/Carrito';
import Favoritos from './pages/Favoritos';
import Historial from './pages/Historial';
import { EstrellasProvider } from './contexto/EstrellasCont';
import { FavoritosProvider } from './contexto/FavoritosCont';

function App() {
  return (
    <EstrellasProvider>
      <FavoritosProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Listado />} />
            <Route path="/detalles/:id" element={<Detalles />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/historial" element={<Historial />} />
          </Routes>
        </Router>
      </FavoritosProvider>
    </EstrellasProvider>
  );
}

export default App;