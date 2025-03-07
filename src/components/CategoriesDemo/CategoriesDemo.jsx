import { Header } from "../Header/Header";
import "./CategoriesDemo.css"
import React, { useState, useEffect } from 'react';
export const CategoriesDemo = ()=> {

    const [data, setData] = useState([]);

    useEffect(() => {
  
        const fetchData = async () => {
          try {
            const response = await fetch( `http://149.50.143.231:3000/api/categories/demo `, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true
            });
            if (response.ok){
              
                const data = await response.json()
                console.log(data.payload)/* LOGGG */
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
   
    
    
    
  return (
    <div>
      <Header></Header>
        <div className="container-category">

        {data &&(data.map((item) => (

                <div key={item._id} className="flex-category">
                    <div className="category">
                        <a href={`/menu/${item.resto}/${item.nombre}`}>
                            <div className="img-category"> <img src={item.image} alt="image" /></div>
                            <div className="title"> {item.nombre}</div>
                        </a>
                    </div>
                </div> )))}
            
        </div>
    </div>

    
  );
}