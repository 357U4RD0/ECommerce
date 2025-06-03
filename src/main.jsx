import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CarritoProvider } from './contexto/CarritoCont';
import { HistorialProvider } from './contexto/HistorialCont.jsx';
import { EstrellasProvider } from './contexto/EstrellasCont';
import { FavoritosProvider } from './contexto/FavoritosCont';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
      <HistorialProvider>
        <EstrellasProvider>
          <FavoritosProvider>
            <App />
          </FavoritosProvider>
        </EstrellasProvider>
      </HistorialProvider>
    </CarritoProvider>
  </StrictMode>
);