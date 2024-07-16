import { useState } from 'react'
import Greeting from './components/function';
import Product from './components/product';

function App() {

  const products = [
    { id: 1, name: "Product 1", price: 50, category: "Category 1", description: "Description of Product 1" },
    { id: 2, name: "Product 2", price: 100, category: "Category 2", description: "Description of Product 2" },
    // Add more products as needed
];

console.log(products[1].name)

  return (
    <>
      <div>
        <Greeting />
        <Product id={products[0].id} name={products[0].name} description={products[0].description} />
        </div>        
    </>
  )
}

export default App
