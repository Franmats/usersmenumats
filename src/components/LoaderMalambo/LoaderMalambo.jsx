import React from "react";
import "./LoaderMalambo.css"; 

export const LoaderMalambo = () => {
    return (
        <div className="loader-container-malambo">
            <img src="/logocompmalambo.png" alt="Cargando..." className="loader-logo-malambo" />
            <p className="loader-text-malambo">Cargando...</p>
        </div>
    );
};

