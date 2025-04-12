import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { CategoriesDemo } from './components/CategoriesDemo/CategoriesDemo.jsx';
import { ProductsView } from './components/ProductsView/ProductsView.jsx';
import {NotFound} from './components/NotFound/NotFound.jsx';
import Promociones from './components/Promociones/Promociones.jsx';
import { ProductsMalambo } from './components/ProductsMalambo/ProductsMalambo.jsx';
import { CategoriesMalambo } from './components/CategoriesMalambo/CategoriesMalambo.jsx';
import { PromocionesMalambo } from './components/PromocionesMalambo/PromocionesMalambo.jsx';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/menu/categories/demo" element={<CategoriesDemo/>}/>
      <Route path="/menu/malambo" element={<CategoriesMalambo/>}/>
      <Route path="/menu/malambo/:meal" element={<ProductsMalambo/>}/>
      <Route path="/menu/malamboprices/:meal" element={<PromocionesMalambo/>}/>
      <Route path="/menu/demo-promociones" element={<Promociones/>}/>
      <Route path="/menu/demo/:meal" element={<ProductsView/>}/>
      <Route path='*' element={<NotFound/>}/> 
    </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;
