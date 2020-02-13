import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {

  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    {
      id: 1,
      nombre: 'Camisa',
      precio: 50
    },
    {
      id: 2,
      nombre: 'Pantalon',
      precio: 40
    },
    {
      id: 3,
      nombre: 'Zapatos',
      precio: 30
    },
    {
      id: 4,
      nombre: 'Gorra',
      precio: 80
    },
  ]);

  //state para el carrito de compras
  const [carrito, agregarProducto] = useState([]);

  //obtener fecha
  const anio = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo='Tienda Virtual' />
      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
        />
      <Footer
        anio={anio} />
    </Fragment>
  );
}

export default App;
