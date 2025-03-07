import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { CategoriesDemo } from './components/CategoriesDemo/CategoriesDemo.jsx';
import { ProductsView } from './components/ProductsView/ProductsView.jsx';
import {NotFound} from './components/NotFound/NotFound.jsx';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/menu/categories/demo" element={<CategoriesDemo/>}/>
      <Route path="/menu/demo/:meal" element={<ProductsView/>}/>
      <Route path='*' element={<NotFound/>}/> 
    </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;
