import React, { Fragment } from 'react'
import { MDBRow, MDBCol, MDBInput, MDBCard, MDBBtn, MDBCardBody, MDBContainer } from 'mdb-react-ui-kit';


export const Login = () => {
    return (
        <Fragment>
           

            <MDBContainer fluid>
                <MDBRow className='my-5 justify-content-center align-items-center h-100'>
                  
                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                    <div className="login">  
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                            <MDBCol className='mb-5'>
                                <div className='text-center mb-5'>
                                    <img src='./images/ShoestoreLogo.png' style={{ width: '185px' }} alt="logo" />
                                </div>

                                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
                                <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' type='password' />

                                <div className="text-center pt-1 mb-5 pb-1">
                                    <MDBBtn className="mb-4 w-100 gradient-custom-2" color='dark' href='http://localhost:3000/listaproductos'>
                                        Iniciar Sesión</MDBBtn>
                                    <a className="text-muted" href="#!">Olvidaste tu contraseña?</a>
                                </div>

                                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                    <p className="mb-0">Aun no tienes cuenta?</p>
                                    <MDBBtn outline className='mx-2' color='danger'>Crear cuenta</MDBBtn>
                                </div>
                            </MDBCol>
                        </MDBCardBody>
                        </div>
                    </MDBCard>
                   
                </MDBRow>
            </MDBContainer>
           
        </Fragment>
    )
}
