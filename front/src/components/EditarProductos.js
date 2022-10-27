import React, { Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBFile, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
const EditarProductos = () => {
  return (
    <Fragment>
      <MDBContainer fluid>
        <MDBRow className='my-5 justify-content-center align-items-center h-100'>
          <section id="productos" className="container mt-5">
            <br />
            <h1 class="fa fa-outdent fa-2x"> Editar Productos</h1>
            <MDBRow>
              <MDBCol md="5">
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
              </MDBCol>
              <MDBCol md="5">
                <form className=" mt-5">

                  <MDBRow className='mb-4 me-2'>
                    <MDBCol>
                      <MDBInput id='form6Example1' label='Producto # 65985' disabled />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput id='form6Example2' label='4' number disabled />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' id='nombre_producto' label='Nombre' />
                  <MDBInput wrapperClass='mb-4' id='precio_producto' label='Precio' number />
                  <MDBFile label='Imagen' id='imagen_producto' />

                  <MDBTextArea label='Message' id='textAreaExample' rows={4} className='mt-3 mb-3' />


                  <MDBBtn className='mb-4' type='submit' block>
                    Editar
                  </MDBBtn>
                </form>
              </MDBCol>
            </MDBRow>
          </section>

        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default EditarProductos;
