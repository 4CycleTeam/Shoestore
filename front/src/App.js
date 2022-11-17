import './App.css';
import React, { useEffect } from 'react';
import { MDBContainer, MDBRow} from 'mdb-react-ui-kit';
import Header from './components/layout/Header';
import Ventas from './components/Ventas';
import { Footer } from './components/layout/Footer';
import ListaProductos from './components/ListaProductos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
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
import { UpdateProduct } from './components/admin/UpdateProduct';
import { Shipping } from './components/cart/Shipping';
import { ConfirmOrder } from './components/cart/ConfirmOrder';
import { Payment } from './components/cart/Payment';
import { Success } from './components/cart/Success'
import { ListOrder } from './components/order/ListOrder';
import { OrderDetails } from './components/order/OrderDetails';
import  UsersList  from './components/admin/UsersList';
import { UserDetails } from './components/admin/UserDetails';


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
            <Route path='/carrito' element={<Cart />}></Route>
            <Route path='/crearproducto' element={<NewProduct />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path="/search/:keyword" element={<ListaProductos />}/>
            <Route path="/productList" element={<ProductsList />}/>
            <Route path="/userList" element={<UsersList />}/>
            <Route path="/search/:keyword" element={<ProductsList />}/>
            <Route path="/register" element= {<Register />} />
            <Route path="/usuario" element={<Profile />}/>
            <Route path="/usuario/update" element={<UpdateProfile />}/>
            <Route path="/password/update" element={<UpdatePassword />}/>
            <Route path="/password/forgot" element={<ForgotPassword />}/>
            <Route path="/resetPassword/:token" element={<NewPassword />}/>
            <Route path='/admin/user/:id' element={<UserDetails />}/>

            
           
         {/*Ruta protegida*/}
         <Route path="/dashboard"
              element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />

            <Route path="/updateProduct/:id"
              element={<ProtectedRoute isAdmin={true}><UpdateProduct /></ProtectedRoute>} />

            <Route path="/shipping"
              element={<ProtectedRoute><Shipping /></ProtectedRoute>} />

            <Route path="/order/confirm"
              element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />

            <Route path="/payment"
              element={<ProtectedRoute><Payment /></ProtectedRoute>} />

            <Route path="/success"
              element={<ProtectedRoute><Success /></ProtectedRoute>} />

            <Route path="/myOrders"
              element={<ProtectedRoute><ListOrder /></ProtectedRoute>} />

            <Route path="/order/:id"
              element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />



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