import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../Data/products.json';

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productsData.products.map(product => (

          
          <li key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
