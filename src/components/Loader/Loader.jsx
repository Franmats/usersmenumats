import React from "react";
import "./Loader.css"; 

export const Loader = () => {
    return (
        <div className="loader-container">
            <img src="/viteh.png" alt="Cargando..." className="loader-logo" />
            <p className="loader-text">Cargando...</p>
        </div>
    );
};

export default Loader;