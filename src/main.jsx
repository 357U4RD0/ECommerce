import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CarritoProvider } from './contexto/CarritoCont'
import { HistorialProvider } from './contexto/Historial'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
      <HistorialProvider>
        <App />
      </HistorialProvider>
    </CarritoProvider>
  </StrictMode>
)