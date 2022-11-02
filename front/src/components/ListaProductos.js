import React, { Fragment, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions';




export const ListaProductos = () => {
    const { loading, productos, error} = useSelector( state => state.productos )
    const dispatch = useDispatch();    


    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                <Fragment> 
                    <MDBContainer fluid>
                    <MDBRow className='my-5 justify-content-center align-items-center h-100'>
                    <section id="productos" className='container mt-5'>
                        <h1 width="16" class="fa fa-list-ul fa-2x"> Lista de Productos</h1>
                        <div className='row'>

                            { productos && productos.map (producto => (

                            <div  key={producto._id }className='col-sm-12 col-md-6 col-lg-3 my-3'>
                            <div className='card p-3 rounded'>
                                <img className='card-img-top mx-auto' src={producto.imagen[0].url}  alt="Almendro"></img>
                                <div className='card-body d-flex flex-column'>
                                    <h5 id="titulo_producto"><a href='http://localhost:3000'>{producto.nombre}</a></h5>
                                    <div className='rating mt-auto'>
                                        <div className='rating-outer'>
                                            <div className='rating-inner'></div>
                                        </div>
                                        <span id="No_de_opiniones"> {producto.numCalificaciones} reviews</span>
                                    </div>
                                    <p className='card-text'>{producto.precio}</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                        Ver detalle
                                    </a>

                                </div>
                            </div>
                        </div>                  

                                
                                
                            ))                         
                            }

                          

                        </div>
                        
                        </section>

                </MDBRow>
            </MDBContainer>
 
                </Fragment>
            )}
        </Fragment>
    )
}
export default ListaProductos