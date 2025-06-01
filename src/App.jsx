import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listado from './pages/Listado';
import Detalles from './pages/Detalles';
import Carrito from './pages/Carrito';
import { EstrellasProvider } from './contexto/EstrellasCont';

function App() {
  return (
    <EstrellasProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Listado />} />
          <Route path="/detalles/:id" element={<Detalles />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </EstrellasProvider>
  );
}

export default App;
