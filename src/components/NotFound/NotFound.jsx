import React from 'react';
import './NotFound.css';

export const  NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      {/* <a href="/">Volver a la página principal</a> */}
    </div>
  );
}

export default NotFound;