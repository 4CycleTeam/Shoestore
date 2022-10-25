import React, {Fragment} from 'react'
import "../../App.css"
const navColor = '#e7e7e9';
const Header = () => {

    return (
        <Fragment>
           <div className='mt-10 fixed-top'>
           <nav className='navbar row bg-dark' >
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand' >
                        <img src="./images/ShoestoreLogo.png" alt="Shoes Store Logo"></img>
                    </div>
                </div>

                <div className='col-12 col-md-4 mt-2 mt-md-0'>
                    <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder='Que producto busca?'></input>
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
           <div className='font-weight-bold'>
           <ul className="nav navbar-light text-dark"style={{backgroundColor:navColor }}>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="http://localhost:3000">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="http://localhost:3000">Link</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-dark" href="http://localhost:3000">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="http://localhost:3000">Disabled</a>
                </li>
            </ul>
           </div> 

        </Fragment>
    )

    }

export default Header