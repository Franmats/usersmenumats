import React from 'react';
import './NotFound.css';
import { Header } from '../Header/Header';

export const NotFound = () => {
  return (
    <div className="not-found-page-container">
      <Header></Header>
      <div className="not-found-page-detail">
        <div className="not-found-page-content">
          <div className="not-found-page-title">
            404 - Página no encontrada
          </div>
          <div className="not-found-page-description">
            Lo sentimos, la página que estás buscando no existe.
          </div>
          <div className="not-found-page-status">
            Error
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;