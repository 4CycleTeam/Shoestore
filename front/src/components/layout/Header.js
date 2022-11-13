import React, { Fragment } from 'react'
import "../../App.css"
import { Link } from "react-router-dom"
import { Search } from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from "../../actions/userActions"
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
} from 'mdb-react-ui-kit';



const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success("LogOut exitoso")
    }

    return (
        <Fragment>
            <div className='mt-10 fixed-top'>
                <nav className='navbar row ' >


                </nav>
            </div>


            <div className='mt-10 fixed-top'>
                <MDBNavbar light bgColor='dark' fixed-top>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='http://localhost:3000/listaproductos'>
                            <img src="./images/ShoestoreLogo.png" alt="Shoes Store Logo" height='50'
                                loading='lazy'></img>
                        </MDBNavbarBrand>


                        <div className='col-12 col-md-3 mt-2 mt-md-0'>
                            {/*Aqui va buscar*/}
                            <Search />
                        </div>
                        <div className="col-12 col-md-4 mt-4 mt-md-0 text-center">
                            <a class="fa fa-shopping-cart fa-2x text-white aria-hidden=false" href='http://localhost:3000/carrito' >.</a>
                            <span className="ml-1" id="cart_count">4</span>


                            {user ? (
                                <div className="ml-4 dropdown d-inline">
                                    <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                                        id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <figure className='avatar avatar-nav'>
                                            <img
                                                src={user.avatar && user.avatar.url}
                                                alt={user && user.nombre}
                                                className="rounded-circle"></img>
                                        </figure>
                                        <span>{user && user.nombre}</span>
                                    </Link>
                                    <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                        {/*Preguntamos el rol de quien esta online*/}
                                        {user && user.role === "admin" && (
                                            <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                                        )}

                                        <Link className="dropdown-item" to="/">Pedidos</Link>
                                        <Link className="dropdown-item" to="/usuario">Mi Perfil</Link>
                                        <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar Sesion</Link>
                                    </div>
                                </div> 
                            ) : !loading && <Link to="/login" className='btn ml-4'  id="login_btn" >iNICIAR SESIÓN </Link>}

                        </div>

                    </MDBContainer>
                </MDBNavbar>
            </div>
        </Fragment>
    )

}

export default Header