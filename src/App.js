import React from 'react'
// import { Card } from '@mui/material';
import Navbar from './Components/NavBar/navBar';
// import Avatar from './Components/Avatar/Avatar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Routes/Home/Home';
import Producto from './Routes/Producto/Producto';
import ProductoID from './Routes/ProductoID/ProductoID';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import ProductList from './Components/Product/Product';

export default function App(){
  return (
<div>
  <Navbar />
  {/* <Card message="Primer Producto: Botines" /> */}
  {/* <CardTest>
    <h1>Hello</h1>
    <p>I like palying football </p>
  </CardTest> */}
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Categoria" element={<Producto />} />
      {/* <Route exact path="/Producto/:id" element={<ProductoID />} /> */}
      {/* <Route exact path="/asd" component={ProductList} /> */}
      <Route path="/category/:id" component={CategoryPage} />
    </Routes>
  </BrowserRouter>
</div>
  );
}