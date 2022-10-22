import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Ventas from './components/Ventas';
import { Footer } from './components/layout/Footer';
import ListaProductos from './components/ListaProductos';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Carrito from './components/Carrito';
import EditarProductos from './components/EditarProductos';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="container container-fluid ">
        <Routes>
         <Route path='/listaproductos' element={<ListaProductos/>}></Route>
         <Route path='/ventas' element={<Ventas/>}></Route>
         <Route path='/carrito' element={<Carrito/>}></Route>
         <Route path='/editarproducto' element={<EditarProductos/>}></Route>

        </Routes>
        </div>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
