import React, { Fragment } from 'react'

export const Carrito = () => {


    return (
        <Fragment>
            <h1 id="encabezado_productos">Carrito</h1>
            <section id="productos" className='container mt-5'>

                <table class="table table-add_review">

                    <tbody>
                        <tr>
                            <td>
                                <div className='row'>

                                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                        <div className='card p-3 rounded'>
                                            <img className='card-img-top mx-auto' src='./images/9TenisdecueroAlmendro.jpg' alt="Almendro"></img>
                                            <div className='card-body d-flex flex-column'>
                                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Almendro</a></h5>
                                                <div className='rating mt-auto'>
                                                    <div className='rating-outer'>
                                                        <div className='rating-inner'></div>
                                                    </div>
                                                    <span id="stock">Stock: 50</span>
                                                </div>
                                                <p className='card-text'>$272.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                                    Comprar
                                                </a>
                                                <p className='card-text'></p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                                    Eliminar
                                                </a>


                                            </div>
                                        </div>
                                    </div>



                                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                        <div className='card p-3 rounded'>
                                            <img className='card-img-top mx-auto' src='./images/4TenisdeportivosdecueroTropicalN.jpg' alt="TropicalN"></img>
                                            <div className='card-body d-flex flex-column'>
                                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Tropical negro</a></h5>
                                                <div className='rating mt-auto'>
                                                    <div className='rating-outer'>
                                                        <div className='rating-inner'></div>
                                                    </div>
                                                    <span id="stock">Stock: 30</span>
                                                </div>
                                                <p className='card-text'>$268.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                                    Comprar
                                                </a>
                                                <p className='card-text'></p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                                    Eliminar
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                        <div className='card p-3 rounded'>
                                            <img className='card-img-top mx-auto' src='./images/7TenisdecueroJacquard.jpg' alt="Jacquard"></img>
                                            <div className='card-body d-flex flex-column'>
                                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Jacquard</a></h5>
                                                <div className='rating mt-auto'>
                                                    <div className='rating-outer'>
                                                        <div className='rating-inner'></div>
                                                    </div>
                                                    <span id="stock">Stock: 60</span>
                                                </div>
                                                <p className='card-text'>$280.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                                    Comprar
                                                </a>
                                                <p className='card-text'></p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                                    Eliminar
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                        <div className='card p-3 rounded'>
                                            <img className='card-img-top mx-auto' src='./images/3TenisDeCueroTropicalC.jpg' alt="TropicalC"></img>
                                            <div className='card-body d-flex flex-column'>
                                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Tropical café</a></h5>
                                                <div className='rating mt-auto'>
                                                    <div className='rating-outer'>
                                                        <div className='rating-inner'></div>
                                                    </div>
                                                    <span id="stock">Stock: 20</span>
                                                </div>
                                                <p className='card-text'>$269.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                                    Comprar
                                                </a>
                                                <p className='card-text'></p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                                    Eliminar
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </td>

                        </tr>

                    </tbody>
                </table>

Subtotal: $1.089.000

                <table class="table table-add_review">

                    <tbody>
                        <tr>
                            <td align="right">
                                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>        <p className='card-text'></p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Vaciar Carrito
                                </a>
                                    <p className='card-text'></p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                        Finalizar Compra
                                    </a>
                                </div>

                            </td>

                        </tr>

                    </tbody>
                </table>

            </section>

        </Fragment>
    )
}
export default Carrito