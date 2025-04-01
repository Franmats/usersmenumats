import React from "react";
import "./LoaderMalambo.css"; 

export const LoaderMalambo = () => {
    return (
        <div className="loader-container">
            <img src="/logocompmalambo.png" alt="Cargando..." className="loader-logo" />
            <p className="loader-text">Cargando...</p>
        </div>
    );
};

