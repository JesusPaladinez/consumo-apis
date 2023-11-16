import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

import Card from './components/card/Card.jsx';

function App() {
  
  const [product, setProduct] = useState([]);

  const urlAPI = "https://fakestoreapi.com/products";

  useEffect( () => {
    /*
    // usando fetch
    fetch(urlAPI)
      .then(res => res.json())
      .then(data => {

        const todos = data.results;
        setPersonajes(todos);
      })
      */
      /*
      // usando async await
      const renderData = async() => {
        const res = await fetch(urlAPI);
        const data = await res.json();
        setPersonajes(data.results);
      }
      renderData();
      */

     // consumo con axios
     const renderData = async() => {
        const data = await axios.get(urlAPI);
        console.log(data.data);
        setProduct(data.data)
      }
     renderData()

  },[])


  return (
    <>
     <h1>Personajes Rick and Morty</h1>
    {

      product.length > 0 ? (
        <div className='contenedor-principal'>
          {
            product.map(producto => (
              <Card
              key={producto.id}
              image={producto.image}
              title={producto.title}
              category={producto.category}
              description={producto.description}
              />
              ))
          }
        </div>
      ) : (
        <h1>No hay personajes</h1>
      )
    }
    </>
  )
}

export default App
