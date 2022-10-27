import React, { Fragment } from "react";
import { MDBContainer,MDBRow, MDBCol, MDBInput, MDBFile, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
const CrearProducto = () => {
  return (
    <Fragment>
      <MDBContainer fluid>
                <MDBRow className='my-5 justify-content-center align-items-center h-100'>
      <section id="productos" className="container mt-5 ">
        <br />
        <h1 class="fa fa-outdent fa-2x"> Crear Productos</h1>

        <table class="table table-add_review">

          <tbody>
            <tr align="center" >
              <td>

                <MDBCol md="6" className="text-center">
                  <form className=" mt-5">
                    <MDBRow className='mb-4 me-2'>
                      <MDBCol>
                        <MDBInput id='form6Example1' label='Id Producto' disabled />
                      </MDBCol>
                      <MDBCol>
                        <MDBInput id='form6Example2' label='4' number />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' id='nombre_producto' label='Nombre' />
                    <MDBInput wrapperClass='mb-4' id='precio_producto' label='Precio' number required />
                    <MDBFile label='Imagen' id='imagen_producto' />

                    <MDBTextArea label='Message' id='textAreaExample' rows={4} className='mt-3 mb-3' />


                    <MDBBtn className='mb-4' type='submit' block>
                      Editar
                    </MDBBtn>
                  </form>
                </MDBCol>

              </td>
            </tr>
          </tbody>
        </table>

      </section>
      </MDBRow>
    </MDBContainer>  
    </Fragment>
  );
};

export default CrearProducto;
