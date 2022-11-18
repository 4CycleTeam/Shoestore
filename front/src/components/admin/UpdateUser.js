import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ADMIN_USER_UPDATE_RESET } from '../../constants/userConstants'
import {getUserDetails, updateUser, clearErrors } from '../../actions/userActions'

export const UpdateUser = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [role, setRole] = useState("")

    const roles = [
        "-- Selecione la categoria --",
        "admin",
        "user"
    ]


    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, isUpdated, error: updateError} = useSelector (state => state.user)
    const {user, error } = useSelector(state => state.userDetails)
    const userId = params.id;

    useEffect(() => {
        if (user && user._id !==userId){
            dispatch(getUserDetails(userId));
        }else{
            setNombre(user.nombre);
            setEmail(user.email);
            setTelefono(user.telefono);
            setDireccion(user.direccion);
            setRole(user.role)
        }

        if (updateError){
            alert.error(error)
            dispatch(clearErrors)
        }
        if(isUpdated){
            alert.success("Usuario actualizado correctamente");
            navigate("/userList")
            dispatch({ type: ADMIN_USER_UPDATE_RESET})
        }

    }, [dispatch, alert, error, isUpdated, updateError, user, userId])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("nombre", nombre);
        formData.set("email", email);
        formData.set("telefono", telefono);
        formData.set("direccion", direccion);
        formData.set("role", role)

        dispatch(updateUser(user._id, formData))
    }

   
    return (
        <Fragment>
            <MetaData title={'ACTUALIZAR USUARIO'} />
            <br />
            <br />

            
            <div className="row wrapper">
           
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <br />
                <br />
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                        <br />
                        <br />
                        <h1 className="my 5 fa fa-pencil-square-o fa-2x">Actualizar Perfil</h1>

                        <div className="form-group">
                            <br />
                            <label htmlFor="email_field">Nombre</label>
                            <input
                                type="name"
                                id="name_field"
                                className="form-control"
                                name='nombre'
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email_field">Telefono</label>
                            <input
                                type="number"
                                id="phone_field"
                                className="form-control"
                                name='telefono'
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="direccion_field">Dirección</label>
                            <input
                                type="direccion"
                                id="direccion_field"
                                className="form-control"
                                name='direccion'
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                            />
                        </div>

                        <div className="formulario">
                            <br />
                            <label htmlFor="role_field">Rol:</label>
                            <select className="form-control"
                                id="role_field"
                                value={role} onChange={(e) => setRole(e.target.value)}>
                                {roles.map(role => (
                                    <option key={role} value={role} >{role}</option>
                                ))}
                            </select>
                            <div class="invalid-feedback">Este campo es requerido</div>
                        </div>


                        <button type="submit"
                         className="btn update-btn btn-block mt-4 mb-3" 
                         id="update_button" 
                         color='dark'
                        disabled={loading ? true : false} >
                            Actualizar Usuario</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}