import { useParams } from "react-router-dom";
import "./ProductsView.css";
import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header";

export const ProductsView = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const { meal } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://matsapps.com/api/products/demo/${meal}`);
                if (response.ok) {
                    const result = await response.json();
                    setData(result.payload);
                } else {
                    console.log("Error al cargar datos");
                }
            } catch (error) {
                console.error("Error al cargar datos:", error);
            } finally {
                setLoading(false); // Finaliza la carga
            }
        };
        fetchData();
    }, [meal]); // Agregar "meal" a las dependencias para recargar cuando cambie

    return (
        <div>
            <Header />
            <div className="menu-view">
                {loading ? (
                    <p className="loading-text">Cargando productos...</p>
                ) : data.length > 0 ? (
                    data.map((item) => (
                        <div key={item._id} className="product-detail-view">
                            <div className="img">
                                <img src={item.imagen} alt={item.nombre} />
                            </div>
                            <div className="detail-view">
                                <b>
                                    <div className="product-title-view">{item.nombre}</div>
                                </b>
                                <div className="product-descrip-view">{item.descripcion}</div>
                                <div className="product-price-view">
                                    <b>${item.precio}</b>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="loading-text">No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};