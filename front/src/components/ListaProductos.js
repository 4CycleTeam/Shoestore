import React, { Fragment } from 'react'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';

export const ListaProductos = () => {


    return (
        <Fragment>
            <MDBContainer fluid>
                <MDBRow className='my-5 justify-content-center align-items-center h-100'>
                    <section id="productos" className='container mt-5'>
                        <h1 width="16" class="fa fa-list-ul fa-2x"> Lista de Productos</h1>
                        <div className='row'>
                            {/*Producto 1*/}
                            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                <div className='card p-3 rounded'>
                                    <img className='card-img-top mx-auto' src='./images/9TenisdecueroAlmendro.jpg' alt="Almendro"></img>
                                    <div className='card-body d-flex flex-column'>
                                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Almendro</a></h5>
                                        <div className='rating mt-auto'>
                                            <div className='rating-outer'>
                                                <div className='rating-inner'></div>
                                            </div>
                                            <span id="No_de_opiniones"> 3 reviews</span>
                                        </div>
                                        <p className='card-text'>$272.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                            Ver detalle
                                        </a>

                                    </div>
                                </div>
                            </div>

                            {/*Producto 2*/}
                            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                <div className='card p-3 rounded'>
                                    <img className='card-img-top mx-auto' src='./images/4TenisdeportivosdecueroTropicalN.jpg' alt="TropicalN"></img>
                                    <div className='card-body d-flex flex-column'>
                                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Tropical negro</a></h5>
                                        <div className='rating mt-auto'>
                                            <div className='rating-outer'>
                                                <div className='rating-inner'></div>
                                            </div>
                                            <span id="No_de_opiniones"> 4 reviews</span>
                                        </div>
                                        <p className='card-text'>$268.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                            Ver detalle
                                        </a>

                                    </div>
                                </div>
                            </div>

                            {/*Producto 3*/}
                            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                <div className='card p-3 rounded'>
                                    <img className='card-img-top mx-auto' src='./images/6TenisdecueroFresia.jpg' alt="Fresia"></img>
                                    <div className='card-body d-flex flex-column'>
                                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Fresia</a></h5>
                                        <div className='rating mt-auto'>
                                            <div className='rating-outer'>
                                                <div className='rating-inner'></div>
                                            </div>
                                            <span id="No_de_opiniones"> 5 reviews</span>
                                        </div>
                                        <p className='card-text'>$255.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                            Ver detalle
                                        </a>

                                    </div>
                                </div>
                            </div>

                            {/*Producto 4*/}
                            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                <div className='card p-3 rounded'>
                                    <img className='card-img-top mx-auto' src='./images/11TenisdeueroFrevor.jpg' alt="Frevor"></img>
                                    <div className='card-body d-flex flex-column'>
                                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Frevor</a></h5>
                                        <div className='rating mt-auto'>
                                            <div className='rating-outer'>
                                                <div className='rating-inner'></div>
                                            </div>
                                            <span id="No_de_opiniones"> 4 reviews</span>
                                        </div>
                                        <p className='card-text'>$270.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                            Ver detalle
                                        </a>

                                    </div>
                                </div>
                            </div>

                            {/*Producto 5*/}
                            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                <div className='card p-3 rounded'>
                                    <img className='card-img-top mx-auto' src='./images/7TenisdecueroJacquard.jpg' alt="Jacquard"></img>
                                    <div className='card-body d-flex flex-column'>
                                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Jacquard</a></h5>
                                        <div className='rating mt-auto'>
                                            <div className='rating-outer'>
                                                <div className='rating-inner'></div>
                                            </div>
                                            <span id="No_de_opiniones"> 4 reviews</span>
                                        </div>
                                        <p className='card-text'>$280.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                            Ver detalle
                                        </a>

                                    </div>
                                </div>
                            </div>

                            {/*Producto 6*/}
                            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                <div className='card p-3 rounded'>
                                    <img className='card-img-top mx-auto' src='./images/3TenisDeCueroTropicalC.jpg' alt="TropicalC"></img>
                                    <div className='card-body d-flex flex-column'>
                                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Tropical café</a></h5>
                                        <div className='rating mt-auto'>
                                            <div className='rating-outer'>
                                                <div className='rating-inner'></div>
                                            </div>
                                            <span id="No_de_opiniones"> 4 reviews</span>
                                        </div>
                                        <p className='card-text'>$269.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                            Ver detalle
                                        </a>

                                    </div>
                                </div>
                            </div>

                            {/*Producto 7*/}
                            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                <div className='card p-3 rounded'>
                                    <img className='card-img-top mx-auto' src='./images/2tenisdecueroProvenza.jpg' alt="Provenza"></img>
                                    <div className='card-body d-flex flex-column'>
                                        <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Provenza</a></h5>
                                        <div className='rating mt-auto'>
                                            <div className='rating-outer'>
                                                <div className='rating-inner'></div>
                                            </div>
                                            <span id="No_de_opiniones"> 4 reviews</span>
                                        </div>
                                        <p className='card-text'>$255.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                            Ver detalle
                                        </a>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>


                </MDBRow>
            </MDBContainer>

        </Fragment>
    )
}
export default ListaProductos