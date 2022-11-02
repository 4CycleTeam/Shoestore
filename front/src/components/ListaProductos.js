import React, { Fragment, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { getProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert} from 'react-alert'


export const ListaProductos = () => {
    const { loading, productos, error} = useSelector(state=> state.productos)
    const alert= useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error){
            return alert.error(error)
        }

        dispatch(getProducts());
    }, [dispatch])



    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                <Fragment> 
                    <MDBContainer fluid>
                    <MDBRow className='my-5 justify-content-center align-items-center h-100'>
                    <section id="productos" className='container mt-5'>
                        <h1 width="16" class="fa fa-list-ul fa-2x"> Lista de Productos</h1>
                        <div className='row'>
                        {productos && productos.map (producto => (
                        <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                                <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                                    <div className='card-body d-flex flex-column'>
                                    <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                                        <div className='rating mt-auto'>
                                            <div className='rating-outer'>
                                            <div className='rating-inner' style={{width: `${(producto.calificacion/5)*100}%`}}></div>
                                            </div>
                                            <span id="No_de_opiniones"> {producto.numCalificaciones} Reviews</span>
                                        </div>
                                        <p className='card-text'>${producto.precio}</p><Link to={`/producto/${producto._id}`} id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </Link>

                                    </div>
                                </div>
                            </div>

                                 ))}
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