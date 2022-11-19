import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MDBRow, MDBContainer } from 'mdb-react-ui-kit';

export const Profile = () => {

    const { user, loading } = useSelector(state => state.auth)

    return (
        <Fragment>
            <MDBContainer fluid>
                <MDBRow className='my-5 justify-content-center align-items-center h-100'>

                    {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                        <Fragment>
                            <MetaData title={"Mi perfil"} />

                            <h1 className="my-5 fa fa-user fa-2x"> Mi Perfil</h1>

                            <table class="table table-bordered ">
                            <div class="container py-1 h-100">
                                <div className="row justify-content-around mt-5 user-info">
                                    <div className="col-12 col-md-3">
                                        <div>
                                            <figure className='avatar avatar-profile'>
                                                <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.nombre} />
                                            </figure>
                                            <Link to="/usuario/update" id="edit_profile" className="btn btn-outline-primary py-1 px-2 border border-dark">
                                                Editar Perfil
                                            </Link>
                                        </div>
                                        <br />
                                                        
                                        <div >
                                            <Link to="/password/update" id="edit_profile" className="btn btn-outline-dark py-1 px-2 border border-dark">
                                                Cambiar contraseña
                                            </Link>
                                        </div>
                                        <br />
                                        <div>
                                            {user.role !== 'admin' && (
                                                <Link to="/myOrders" id="edit_profile" className="btn btn-outline-dark py-1 px-2 border border-dark">
                                                    Mis Pedidos
                                                </Link>
                                            )}

                                        </div>
                                    </div>

                                    <div class="col-md-8">
                                        <div class="card-body p-4">
                                            <h6 className="fa fa-user-secret fa-lg"> Informacion</h6>
                                            <hr class="mt-0 mb-4" />
                                            <div class="row pt-1">
                                                <div class="col-6 mb-3">
                                                    <h4>Nombre Completo</h4>
                                                    <p>{user.nombre}</p>
                                                </div>
                                                <div class="col-6 mb-3">
                                                    <h4>Email</h4>
                                                    <p>{user.email}</p>
                                                </div>
                                                <hr />
                                                <div class="col-6 mb-3">
                                                    <h4>Teléfono</h4>
                                                    <p>{user.telefono}</p>
                                                </div>
                                                <div class="col-6 mb-3">
                                                    <h4>Dirección</h4>
                                                    <p>{user.direccion}</p>
                                                </div>
                                                <hr />
                                                <div class="col-6 mb-3">
                                                    <h4>Registrado el: </h4>
                                                    <p>{String(user.fechaRegistro).substring(0, 10)}</p>

                                                </div>

                                            </div>


                                        </div></div>
                                    <div className="col-6 mb-3" id="btn_perfil">

                                    </div>

                                </div>
                            </div>
                            </table>
                        </Fragment>
                    )}
                </MDBRow>
            </MDBContainer>
        </Fragment>
    )
}