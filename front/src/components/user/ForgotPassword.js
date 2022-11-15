import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword, clearErrors } from '../../actions/userActions'
import { MDBRow, MDBCol, MDBCard, MDBBtn, MDBCardBody, MDBContainer } from 'mdb-react-ui-kit';

export const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const alert = useAlert();
    const dispatch = useDispatch();
    const { error, loading, message } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message)
        }

    }, [dispatch, alert, error, message])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('email', email);

        dispatch(forgotPassword(formData))
    }

    return (
        <Fragment>
            <MetaData title={'Olvide mi contraseña'} />
            <MDBContainer fluid>
                <MDBRow className='my-5 justify-content-center align-items-center h-100'>
                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <div className="password">
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                <MDBCol className='mb-5'>


                                    <form onSubmit={submitHandler}>
                                        <br />
                                        
                                        <h1 className="fa fa-hand-o-right fa-2x"> Olvide mi Password</h1>
                                        <div className="form-group">
                                            <br />
                                            <br />
                                            <label htmlFor="email_field">Email Registrado:</label>
                                            
                                            <input
                                                type="email"
                                                id="email_field"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <br />
                                        <MDBBtn

                                            id="forgot_password_button"
                                            type="submit"
                                            color='dark'
                                            className="mb-4 w-100 gradient-custom-2"
                                            disabled={loading ? true : false} >
                                            Recuperar contraseña

                                        </MDBBtn>

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

export default ForgotPassword