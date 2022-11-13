import React, { Fragment } from "react";
import {MDBContainer,MDBRow} from 'mdb-react-ui-kit';

export const Carrito = () => {
  return (
    <Fragment>
       <MDBContainer fluid>
                <MDBRow className='my-5 justify-content-center align-items-center h-100'>
      <br />
      <div className="row d-flex justify-content-between">
        <div>
          <br />
          <br />
          <br />
          <h1 id="h1carrito" class="fa fa-shopping-cart fa-2x">
            Carrito de Compras
          </h1>
        </div>

        <div className="col-12 col-lg-9">
          <section id="productos" className="container mt-5">
            <table class="table table-add_review">
              <tbody>
                <tr>
                  <td>
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                          <img
                            className="card-img-top mx-auto"
                            src="./images/9TenisdecueroAlmendro.jpg"
                            alt="Almendro"
                          ></img>
                          <div className="card-body d-flex flex-column">
                            <h5 id="titulo_producto">
                              <a href="http://localhost:3000">
                                Tenis de cuero Almendro
                              </a>
                            </h5>
                            <div className="rating mt-auto">
                              <div className="rating-outer">
                                <div className="rating-inner"></div>
                              </div>
                              <span id="stock">Stock: 50</span>
                            </div>
                            <p className='card-text'>$272.000</p>
                            <p className="card-text"></p>
                            <a
                              href="http://localhost:3000"
                              id="view_btn"
                              className="btn btn-block"
                            >
                              Eliminar
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                          <img
                            className="card-img-top mx-auto"
                            src="./images/4TenisdeportivosdecueroTropicalN.jpg"
                            alt="TropicalN"
                          ></img>
                          <div className="card-body d-flex flex-column">
                            <h5 id="titulo_producto">
                              <a href="http://localhost:3000">
                                Tenis de cuero Tropical negro
                              </a>
                            </h5>
                            <div className="rating mt-auto">
                              <div className="rating-outer">
                                <div className="rating-inner"></div>
                              </div>
                              <span id="stock">Stock: 30</span>
                            </div>
                            <p className='card-text'>$268.000</p>
                            <p className="card-text"></p>
                            <a
                              href="http://localhost:3000"
                              id="view_btn"
                              className="btn btn-block"
                            >
                              Eliminar
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                          <img
                            className="card-img-top mx-auto"
                            src="./images/7TenisdecueroJacquard.jpg"
                            alt="Jacquard"
                          ></img>
                          <div className="card-body d-flex flex-column">
                            <h5 id="titulo_producto">
                              <a href="http://localhost:3000">
                                Tenis de cuero Jacquard
                              </a>
                            </h5>
                            <div className="rating mt-auto">
                              <div className="rating-outer">
                                <div className="rating-inner"></div>
                              </div>
                              <span id="stock">Stock: 60</span>
                            </div>
                            <p className='card-text'>$280.000</p>
                            <p className="card-text"></p>
                            <a
                              href="http://localhost:3000"
                              id="view_btn"
                              className="btn btn-block"
                            >
                              Eliminar
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                          <img
                            className="card-img-top mx-auto"
                            src="./images/3TenisDeCueroTropicalC.jpg"
                            alt="TropicalC"
                          ></img>
                          <div className="card-body d-flex flex-column">
                            <h5 id="titulo_producto">
                              <a href="http://localhost:3000">
                                Tenis de cuero Tropical café
                              </a>
                            </h5>
                            <div className="rating mt-auto">
                              <div className="rating-outer">
                                <div className="rating-inner"></div>
                              </div>
                              <span id="stock">Stock: 20</span>
                            </div>
                            <p className='card-text'>$269.000</p>
                          
                            <p className="card-text"></p>
                            <a
                              href="http://localhost:3000"
                              id="view_btn"
                              className="btn btn-block"
                            >
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
          </section>
        </div>

        <div className="col-12 col-lg-3 my-4">
        <br />
          <div id="order_summary">
            <h4  class="fa fa-money"> Total de la Compra</h4>
            <hr />
            <p>
              Subtotal: <span className="order-summary-values">$1.068.309</span>
            </p>
            <p>
              Est. total:{" "}
              <span className="order-summary-values"> $1.089.000</span>
            </p>

            <hr />
            <a
              href="http://localhost:3000/finalizarcompra"
              id="checkout_btn"
              className="btn btn-primary btn-block border border-dark">
              Finalizar Compra
            </a>
            <button
              id="checkout_btn"
              className="btn btn-primary btn-block border border-dark"
              type="reset"
              value="Reset" >
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
      </MDBRow>
           </MDBContainer>    
    </Fragment>
  );
};
export default Carrito;