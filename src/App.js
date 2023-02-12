import React from 'react'
import Card from './Components/Card/Card';
import Navbar from './Components/NavBar/navBar';

export default function App(){
  return (
<div>
  <Navbar />
  <Card message="Primer Producto: Botines" />
</div>
  );
}