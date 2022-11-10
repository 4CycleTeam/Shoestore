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

                                    <form>
                                        <h5 className="text-muted">Inicio de Sesión</h5>
                                        <br /> 
                                        <div className='form-group'>
                                            <MDBInput wrapperClass='mb-4' label='Email' type="email" id="email_field" className='form-control' />
                                            <MDBInput wrapperClass='mb-4' label='Contraseña' id="password_field" type='password' />
                                            <MDBBtn className="mb-4 w-100 gradient-custom-2" id="login_button" type="submit" color='dark'>
                                                Iniciar</MDBBtn>

                                            <a className="text-muted" href="/password/forgot">Olvidaste tu contraseña?</a>
                                        </div>
                                        <br />  <br />
                                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                            <br />  <br />
                                            <p className="text-muted">¿Aún no tienes cuenta?</p>
                                            <MDBBtn outline className='mx-2' color='danger'>Crear cuenta</MDBBtn>
                                        </div>
                                    </form>

                                </MDBCol>
                            </MDBCardBody>
                        </div>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>
        </Fragment>
    )
}