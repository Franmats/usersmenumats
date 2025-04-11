import { useParams } from "react-router-dom";
import "./ProductsMalambo.css";
import React, { useState, useEffect } from "react";
import { HeaderMalambo } from "../HeaderMalambo/HeaderMalambo.jsx";
import { LoaderMalambo } from "../LoaderMalambo/LoaderMalambo.jsx";

export const ProductsMalambo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { meal } = useParams();
    const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen en el modal

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
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

            setTimeout(() => {
                setLoading(false);
            }, 500);
        };

        fetchData();
    }, [meal]);

    return (
        <div>
            <HeaderMalambo />
            {loading ? (
                <LoaderMalambo />
            ) : (
                <div className="menu-malambo">
                    {data.filter((item) => item.status === "activo").map((item) => (
                        <div key={item._id} className="product-detail-malambo">
                            <div className="img">
                                <img 
                                    src={item.imagen} 
                                    alt={item.nombre} 
                                    onClick={() => setSelectedImage(item.imagen)} // Al hacer clic, abre la imagen
                                    style={{ cursor: "pointer" }} 
                                />
                            </div>
                            <div className="detail-malambo">
                                <div className="product-title-malambo"><b>{item.nombre}</b></div>
                                <div className="product-descrip-malambo">{item.descripcion}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        
            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Imagen ampliada" />
                    </div>
                </div>
            )}
        </div>
    );
};