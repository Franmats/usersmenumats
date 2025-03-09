import { Header } from "../Header/Header";
import "./CategoriesDemo.css";
import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader.jsx";

export const CategoriesDemo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Activa el loader al iniciar la petición
            try {
                const response = await fetch("https://matsapps.com/api/categories/demo", {
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

            // Mantiene el loader visible 2 segundos más
            setTimeout(() => {
                setLoading(false);
            }, 500); // 2000ms = 2 segundos
        };

        fetchData();
    }, []);

    return (
        <div>
            <Header />
            {loading ? (
                <Loader /> // Muestra el loader mientras carga
            ) : (
                <div className="container-category">
                    {data.map((item) => (
                        <div key={item._id} className="flex-category">
                            <div className="category">
                                <a href={`/menu/${item.resto}/${item.nombre}`}>
                                    <div className="img-category">
                                        <img src={item.image} alt={item.nombre} />
                                    </div>
                                    <div className="title">{item.nombre}</div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
