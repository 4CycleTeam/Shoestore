
import React, { Fragment,useEffect, useState} from "react";
import MetaData from "./layout/MetaData";
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from "../actions/productActions";




const DetallesProducto = () => {

    const {loading, producto, error} = useSelector(state =>state.producto)
   const {id} =useParams();
   const dispatch= useDispatch();

   useEffect( () => { dispatch(getProduct(id)); }, [dispatch])
   

    return (
        <Fragment>
            <MetaData title={producto.nombre}></MetaData>
            <div className='my-5 d-flex justify-content-around '>
                <div className='my-5 col-12 col-lg-5 img-fluid' id="imagen_producto">
                    <img src={'./images/2tenisdecueroProvenza.jpg'} alt="Imagen_producto" height="450" width="450"></img>
                </div>

                <div className='col-12 col-lg-5 mt-5'>
                <h1 class="fa fa-tasks fa-2x"> Detalles del producto</h1>
                <br/>
                <br/>
                    <h3>{producto.nombre}</h3>
                    <br/>
                    <p id="product_id">Producto #{producto._id}</p>
                    <hr />
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>

                            <div className='rating-inner'></div>
                        </div>
                        <span id="No_de_opiniones">{producto.numCalificaciones} Reviews</span>
                        <hr />
                        <p id="precio_producto">{producto.precio}</p>
                        
                        <div className="stockCounter d-inline">
                            <span className="btn btn-danger minus" >-</span>
                            &nbsp; &nbsp; &nbsp;
                            <span className="btn btn-primary plus" >+</span>
                        </div>
                        <hr />
                        <p>Estado: En existencia</p>
                        <hr />
                        <h4 className="mt-2">Descripción:</h4>
                        <p>Zapato deportivo</p>
                        <hr />
                    </div>
                </div>
            </div>
        </Fragment>
    );

};
export default DetallesProducto;