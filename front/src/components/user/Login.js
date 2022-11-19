
import React, { Fragment, useEffect, useState } from 'react'
import { MDBRow, MDBCol, MDBInput, MDBCard, MDBBtn, MDBCardBody, MDBContainer } from 'mdb-react-ui-kit';
import { useNavigate , Link} from "react-router-dom"
import { login, clearErrors } from "../../actions/userActions"
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }
    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <MDBContainer fluid>

                    <MDBRow className='my-5 justify-content-center align-items-center h-100'>
                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <div className="login">
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                    <MDBCol className='mb-5'>
                                        <div className='text-center mb-5'>
                                            <img src='./images/ShoestoreLogo.png' style={{ width: '185px' }} alt="logo" />
                                        </div>

                                        <form onSubmit={submitHandler}>
                                            <h5 className="text-muted">INICIO DE SESIÓN</h5>
                                            <br />
                                            <div className='form-group'>
                                                <MDBInput wrapperClass='mb-4' label='Email' type="email" id="email_field" className='form-control' value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />

                                                <MDBInput wrapperClass='mb-4' label='Contraseña' id="password_field" type='password' value={password}
                                                    onChange={(e) => setPassword(e.target.value)} />

                                                <MDBBtn className="mb-4 w-100 gradient-custom-2" id="login_button" type="submit" color='dark'>
                                                    Iniciar</MDBBtn>

                                                <a className="text-muted" href="/password/forgot">Olvidaste tu contraseña?</a>
                                            </div>
                                            <br />  <br />
                                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                                <br />  <br />
                                                <p className="text-muted">¿Aún no tienes cuenta?
                                                <Link to="/register" className='float-right mt-3'>Registrese aquí</Link></p>
                                            </div>
                                        </form>

                                    </MDBCol>
                                </MDBCardBody>
                            </div>
                        </MDBCard>
                    </MDBRow>
                </MDBContainer>
            )}
        </Fragment>
    )
}