import React, { useContext } from 'react';
import EstrellasContext from '../contexto/EstrellasCont';

const Estrellas = ({ id, editable = false }) => {
  const { estrellas, Puntuacion } = useContext(EstrellasContext);
  const valor = estrellas[id] ?? 0;

  const manejarClick = (e, index) => {
    if (!editable) return;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const mitad = rect.width / 2;
    const nuevoValor = x < mitad ? index + 0.5 : index + 1;
    Puntuacion(id, nuevoValor);
  };

  return (
    <div style={{ display: 'flex', cursor: editable ? 'pointer' : 'default' }}>
      {[0, 1, 2, 3, 4].map(i => (
        <span
          key={i}
          onClick={e => manejarClick(e, i)}
          style={{ color: valor >= i + 1 ? '#FFD700' : valor >= i + 0.5 ? '#FFD70080' : '#ccc', fontSize: '1.5em' }}>
          ★
        </span>
      ))}
      {!editable && <span style={{ marginLeft: '0.5em' }}>{valor.toFixed(1)}</span>}
    </div>
  );
};

export default Estrellas;