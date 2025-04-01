import { useParams } from "react-router-dom";
import "./ProductsMalambo.css";
import React, { useState, useEffect } from "react";
import { HeaderMalambo } from "../HeaderMalambo/HeaderMalambo.jsx";
import { LoaderMalambo } from "../LoaderMalambo/LoaderMalambo.jsx";

export const ProductsMalambo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const { meal } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Activar el loader
            try {
                const response = await fetch(`https://matsapps.com/api/products/malambo/${meal}`, {
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
            <HeaderMalambo />
            {loading ? (
                <LoaderMalambo /> // Muestra el loader mientras carga
            ) : (
                <div className="menu-malambo">
                    {data.filter((item) => item.status === "activo").map((item) => (
                        <div key={item._id} className="product-detail-malambo">
                            <div className="img">
                                <img src={item.imagen} alt={item.nombre} />
                            </div>
                            <div className="detail-malambo">
                                <div className="product-title-malambo"><b>{item.nombre}</b></div>
                                <div className="product-descrip-malambo">{item.descripcion}</div>
                                <div className="product-price-malambo"><b>${item.precio}</b></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};