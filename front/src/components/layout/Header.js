import React, {Fragment} from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn
    
  } from 'mdb-react-ui-kit';
import "../../App.css"

const Header = () => {

    return (
        <Fragment>
           <div className='mt-10 fixed-top'>
            <nav className='navbar row ' >
                    <div className='col-12 col-md-3'>
                        
                    </div>

                    <div className='col-12 col-md-4 mt-2 mt-md-0'>
                        <div className="input-group">
                            <input
                                type="text"
                                id="search_field"
                                class="form-control" placeholder='Que producto busca?'></input>
                            <div class="input-group-append">
                                <button id="search-btn" class="btn">
                                    <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                        <a className="btn text-white" id="login_btn"  href='http://localhost:3000/login'>Inicie Sesión</a>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                        <span className="ml-1" id="cart_count">4</span>
                    </div>   
            </nav>        
                       
         </div>
         <>
         <div className='mt-10 fixed-top'>
         <MDBNavbar light bgColor='dark' fixed-top>
        <MDBContainer fluid>
          <MDBNavbarBrand href='http://localhost:3000/listaproductos'>
          <img src="./images/ShoestoreLogo.png" alt="Shoes Store Logo" height='50'
              loading='lazy'></img>
          </MDBNavbarBrand>

     
          <div className="text-center">
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
          </div>
         

          <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                        <a className="btn text-white" id="login_btn"  href='http://localhost:3000/login'>Inicie Sesión</a>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <a class="fa fa-shopping-cart fa-2x text-white aria-hidden=false" href='http://localhost:3000/carrito' >.</a>
                        <span className="ml-1" id="cart_count">4</span>
                    </div>   
        </MDBContainer>
      </MDBNavbar>
      </div>
    </>

        </Fragment>
    )

    }

export default Header