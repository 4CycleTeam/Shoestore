
import React, { Fragment } from "react";
import MetaData from "./layout/MetaData";


const DetallesProducto = () => {
    return (
        <Fragment>
            <MetaData title="Tenis de cuero provenza"></MetaData>
            <div className='my-5 d-flex justify-content-around '>
                <div className='my-5 col-12 col-lg-5 img-fluid' id="imagen_producto">
                    <img src='./images/2tenisdecueroProvenza.jpg' alt="Imagen_producto" height="450" width="450"></img>
                </div>

                <div className='col-12 col-lg-5 mt-5'>
                <h1 class="fa fa-tasks fa-2x">  Destalles del producto</h1>
                <br/>
                <br/>
                    <h3>Tenis de Cuero Provenza</h3>
                    <br/>
                    <p id="product_id">Product #3253251</p>
                    <hr />
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>

                            <div className='rating-inner'></div>
                        </div>
                        <span id="No_de_opiniones">{5} Reviews</span>
                        <hr />
                        <p id="precio_producto">$75.000</p>
                        
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