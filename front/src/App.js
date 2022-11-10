import './App.css';
import React from 'react';
import { MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Header from './components/layout/Header';
import Ventas from './components/Ventas';
import { Footer } from './components/layout/Footer';
import ListaProductos from './components/ListaProductos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carrito from './components/Carrito';
import EditarProductos from './components/EditarProductos';
import CrearProducto from './components/CrearProducto';
import FinalizarCompra from './components/FinalizarCompra';
import { Login } from './components/user/Login'
import { DetallesProducto } from './components/products/DetallesProducto';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';





function App() {
  return (
    <Router>
      <div className="App">
        <MDBContainer fluid>

          <Header />
          

          <Routes>
            <Route path='/' element={<ListaProductos />}></Route>
            <Route path='/listaproductos' element={<ListaProductos />}></Route>
            <Route path='/producto/:id' element={<DetallesProducto />}/>
            <Route path='/ventas' element={<Ventas />}></Route>
            <Route path='/carrito' element={<Carrito />}></Route>
            <Route path='/editarproducto' element={<EditarProductos />}></Route>
            <Route path='/crearproducto' element={<CrearProducto />}></Route>
            <Route path='/finalizarcompra' element={<FinalizarCompra />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/search/:keyword" element={<ListaProductos />}/>
            <Route path="/productList" element={<ProductsList />}/>
            <Route path="/search/:keyword" element={<ProductsList />}/>
           


          </Routes>
     
          <MDBRow className='my-5 justify-content-center align-items-center h-100'>
            <Footer />
            </MDBRow>
        </MDBContainer>
      </div>

    </Router>
  );
}

export default App;