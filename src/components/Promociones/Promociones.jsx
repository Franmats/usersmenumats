import React from 'react';
import './Promociones.css';
import { Header } from '../Header/Header';

export const Promociones = () => {
  return (
    <div className="promociones-container">
      <Header></Header>
      <div className="promociones-detail-view">
        <div className="promociones-detail">
          <div className="promociones-title">
            ¡Próximamente!
          </div>
          <div className="promociones-description">
            Estamos preparando promociones increíbles para ti. ¡Mantente atento!
          </div>
          <div className="promociones-price">
            Muy Pronto
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promociones;