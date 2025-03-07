import { useNavigate, useParams } from "react-router-dom";
import "./ProductsView.css"
import React, { useState, useEffect } from 'react';
import { Header } from "../Header/Header";

export const ProductsView = ()=> {
    const [data, setData] = useState([]);
    const {meal} = useParams();
    //USE EFFECT
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://149.50.143.231:3000/api/products/demo/${meal} `, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true
            });
            if (response.ok){
    
                const data = await response.json()
                setData(data.payload);
            }else {
                
                console.log('Error al cargar datos');
              }
          } catch (error) {
            console.error('Error al cargar datos:', error);
          }
        };
        fetchData();  
      }, []);
      //RETURN
      return (
        <div>
          <Header></Header>
    
                  <div className="menu-view">
                  {data && (data.map((item) => (
                      <div key={item._id} className="product-detail-view">
                          <div className="img"><img src={item.imagen} alt="" /></div>
                          <div className="detail-view">
                              <b><div  className="product-title-view">{item.nombre}</div></b>
                              <div className="product-descrip-view">{item.descripcion}</div>
                              <div className="product-price-view"><b>${item.precio}</b></div>
                          </div>
                          
                      </div>
                      )))}
                  </div>
              
            
    
        </div>
      );
}