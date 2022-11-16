import './App.css';
import React, { useEffect } from 'react';
import { MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Header from './components/layout/Header';
import Ventas from './components/Ventas';
import { Footer } from './components/layout/Footer';
import ListaProductos from './components/ListaProductos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carrito from './components/Carrito';
import EditarProductos from './components/EditarProductos';
import FinalizarCompra from './components/FinalizarCompra';
import { Login } from './components/user/Login'
import { DetallesProducto } from './components/products/DetallesProducto';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/newProduct';
import { Register } from './components/user/Register';
import { loadUser } from './actions/userActions';
import store from "./store"
import { Profile } from './components/user/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
import { UpdateProfile} from "./components/user/UpdateProfile"
import { UpdatePassword } from './components/user/UpdatePassword';
import { ForgotPassword } from "./components/user/ForgotPassword"
import { NewPassword } from './components/user/NewPassword';


function App() {
  useEffect(()=>{
   store.dispatch(loadUser())
  },[])



  return (
    <Router>
      <div className="App">
        <MDBContainer fluid>

          <Header />
          <div className='container container-fluid'>
          

          <Routes>
            <Route path='/' element={<ListaProductos />}></Route>
            <Route path='/listaproductos' element={<ListaProductos />}></Route>
            <Route path='/producto/:id' element={<DetallesProducto />}/>
            <Route path='/ventas' element={<Ventas />}></Route>
            <Route path='/carrito' element={<Carrito />}></Route>
            <Route path='/editarproducto' element={<EditarProductos />}></Route>
            <Route path='/crearproducto' element={<NewProduct />}></Route>
            <Route path='/finalizarcompra' element={<FinalizarCompra />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/search/:keyword" element={<ListaProductos />}/>
            <Route path="/productList" element={<ProductsList />}/>
            <Route path="/search/:keyword" element={<ProductsList />}/>
            <Route path="/register" element= {<Register />} />
            <Route path="/usuario" element={<Profile />}/>
            <Route path="/usuario/update" element={<UpdateProfile />}/>
            <Route path="/password/update" element={<UpdatePassword />}/>
            <Route path="/password/forgot" element={<ForgotPassword />}/>
            <Route path="/resetPassword/:token" element={<NewPassword />}/>
            
           
            {/*Ruta protegida*/}
           <Route path="/dashboard" 
            element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>}/>

       </Routes>
        </div>

          <MDBRow className='my-5 justify-content-center align-items-center h-100'>
            <Footer />
            </MDBRow>
        </MDBContainer>
      </div>

      </Router>
  );
}

export default App;