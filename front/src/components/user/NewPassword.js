import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import { useParams, useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, clearErrors } from '../../actions/userActions'
import { MDBRow, MDBCol, MDBCard, MDBBtn, MDBCardBody, MDBContainer } from 'mdb-react-ui-kit';

export const NewPassword = () => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const params = useParams();
    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('Contraseña reiniciada correctamente')
            navigate('/login')
        }

    }, [dispatch, alert, error, success])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);
        dispatch(resetPassword(params.token, formData))
    }
    return (
        <Fragment>

            <MetaData title={'Reinicio de contraseña'} />

            <MDBContainer fluid>

                <MDBRow className='my-5 justify-content-center align-items-center h-100'>
                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <div className="password">
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                <MDBCol className='mb-5'>


                                    <form onSubmit={submitHandler}>
                                        <br />

                                        <h1 className="fa fa-key fa-2x"> Nueva Password</h1>

                                        <div className="form-group">
                                            <br />

                                            <label htmlFor="password_field">Contraseña:</label>
                                            <input
                                                type="password"
                                                id="password_field"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="confirm_password_field">Confirmar Contraseña:</label>
                                            <input
                                                type="password"
                                                id="confirm_password_field"
                                                className="form-control"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                        <br />
                                        <MDBBtn

                                            id="new_password_button"
                                            type="submit"
                                            color='dark'
                                            className="mb-4 w-100 gradient-custom-2">
                                            Guardar Nueva Contraseña

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