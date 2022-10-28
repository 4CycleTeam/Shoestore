import './App.css';
import React from 'react';
import { MDBContainer} from 'mdb-react-ui-kit';
import Header from './components/layout/Header';
import Ventas from './components/Ventas';
import { Footer } from './components/layout/Footer';
import ListaProductos from './components/ListaProductos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carrito from './components/Carrito';
import EditarProductos from './components/EditarProductos';
import CrearProducto from './components/CrearProducto';
import FinalizarCompra from './components/FinalizarCompra';
import { Login } from './components/Login';
import DetallesProducto from './components/DetallesProducto';


function App() {
  return (
    <Router>
      <div className="App">
        <MDBContainer fluid>

          <Header />

          <Routes>
            <Route path='/' element={<ListaProductos />}></Route>
            <Route path='/listaproductos' element={<ListaProductos />}></Route>
            <Route path='/ventas' element={<Ventas />}></Route>
            <Route path='/carrito' element={<Carrito />}></Route>
            <Route path='/editarproducto' element={<EditarProductos />}></Route>
            <Route path='/crearproducto' element={<CrearProducto />}></Route>
            <Route path='/finalizarcompra' element={<FinalizarCompra />}></Route>
            <Route path='/detallesproducto' element={<DetallesProducto />}></Route>
            <Route path='/login' element={<Login />}></Route>
            
          </Routes>


          
            <Footer />
         
        </MDBContainer>
      </div>

    </Router>
  );
}

export default App;