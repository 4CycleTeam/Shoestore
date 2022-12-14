import React, { Fragment, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux';
import { MDBRow, MDBContainer } from 'mdb-react-ui-kit';
import { getUserDetails, clearErrors } from '../../actions/userActions';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert'

export const UserDetails = () => {

    
    
    const { loading, user, error } = useSelector(state => state.userDetails)
   
  
    const params = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
  
  
    useEffect(() => {
      dispatch(getUserDetails(params.id))
      if (error) {
        alert.error(error);
        dispatch(clearErrors())
      }
  
    }, [dispatch, alert, error, params.id])
     

  
    return (
        <Fragment>
            <MDBContainer fluid>
                <MDBRow className='my-5 justify-content-center align-items-center h-100'>

                    {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                        <Fragment>
                            <MetaData title={"Mi perfil"} />
                            
                            <h1 className="my-5 fa fa-user fa-2x"> Perfil de:  {user.nombre} </h1>

                            <table class="table table-bordered ">
                            <div class="container py-1 h-100">
                                <div className="row justify-content-around mt-5 user-info">
                                <div className="col-12 col-md-3">
                                        <div>
                                            <figure className='avatar avatar-profile'>
                                            <img
                                                src={user.avatar && user.avatar.url}
                                                alt={user && user.nombre}
                                                className="rounded-circle"></img>
                                                 </figure>
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
                                                    <h4>Tel??fono</h4>
                                                    <p>{user.telefono}</p>
                                                </div>
                                                <div class="col-6 mb-3">
                                                    <h4>Direcci??n</h4>
                                                    <p>{user.direccion}</p>
                                                </div>
                                                <hr />
                                                <div class="col-6 mb-3">
                                                    <h4>Rol: </h4>
                                                    <p>{String(user.role).substring(0, 10)}</p>

                                                </div>
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