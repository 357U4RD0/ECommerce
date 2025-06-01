import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CarritoProvider } from './contexto/CarritoCont';
import { HistorialProvider } from './contexto/Historial.jsx';
import { EstrellasProvider } from './contexto/EstrellasCont';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
      <HistorialProvider>
        <EstrellasProvider>
          <App />
        </EstrellasProvider>
      </HistorialProvider>
    </CarritoProvider>
  </StrictMode>
);