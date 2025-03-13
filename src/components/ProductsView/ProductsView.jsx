import { useParams } from "react-router-dom";
import "./ProductsView.css";
import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import Loader from "../Loader/Loader.jsx"; // Importamos el loader

export const ProductsView = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const { meal } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Activar el loader
            try {
                const response = await fetch(`https://matsapps.com/api/products/demo/${meal}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                });

                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData.payload);
                } else {
                    console.log("Error al cargar datos");
                }
            } catch (error) {
                console.error("Error al cargar datos:", error);
            }

            // Agregar un retraso extra de 2 segundos antes de ocultar el loader
            setTimeout(() => {
                setLoading(false);
            }, 500); // 2000ms = 2 segundos
        };

        fetchData();
    }, [meal]);

    return (
        <div>
            <Header />
            {loading ? (
                <Loader /> // Muestra el loader mientras carga
            ) : (
                <div className="menu-view">
                    {data.filter((item) => item.status === "activo").map((item) => (
                        <div key={item._id} className="product-detail-view">
                            <div className="img">
                                <img src={item.imagen} alt={item.nombre} />
                            </div>
                            <div className="detail-view">
                                <div className="product-title-view"><b>{item.nombre}</b></div>
                                <div className="product-descrip-view">{item.descripcion}</div>
                                <div className="product-price-view"><b>${item.precio}</b></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};