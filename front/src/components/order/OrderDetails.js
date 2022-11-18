import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom'
import { clearErrors, getOrderDetails } from '../../actions/orderActions';
import MetaData from '../layout/MetaData'

export const OrderDetails = () => {
    const navigate=useNavigate();
    const params= useParams();
    const alert= useAlert();
    const dispatch= useDispatch();
    const {loading, error, order={}}= useSelector(state=> state.orderDetails)
    const { envioInfo, items, pagoInfo, user, precioTotal, estado} = order

   useEffect(()=>{
        dispatch(getOrderDetails(params.id));
        if (error){
            alert.error(error)
            dispatch(clearErrors)
        }
    },[dispatch, alert, error, params.id])
    const detalleEnvio= envioInfo && `${envioInfo.direccion}, ${envioInfo.ciudad}, ${envioInfo.departament}`

    const esPago= pagoInfo && pagoInfo.estado==="Aceptado" ? true : false

  return (
    <Fragment>
            <MetaData title={'Detalle del Pedido'} />

            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <Fragment>
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8 mt-5 order-details">

                            <h1 className="my-5">Pedido # {order._id}</h1>

                            <h4 className="fa fa-plane fa-2x"> Datos de envio</h4>
                            <p className="form-group"><b>Nombre:</b> {user && user.nombre}</p>
                            <p className="form-group"><b>Telefono:</b> {envioInfo && envioInfo.telefono}</p>
                            <p className="form-group"><b>Dirección:</b>{detalleEnvio}</p>
                            <p className="form-group"><b>Pago Total:</b> ${precioTotal}</p>

                            <hr />
                            <div className="form-group">

                            <p className="form-group"><b>Pago</b></p>
                            <p className={esPago ? "greenColor" : "redColor"}><b>{esPago ? "Pago Completado" : "Pendiente de pago"}</b></p>

                            <p className="form-group"><b>Estado del pedido:</b></p>
                            <p className={order.estado && String(order.estado).includes('Entregado') ? "greenColor" : "redColor"} ><b>{estado}</b></p>

                            <p className="form-group"><b>Productos Comprados:</b></p>
                            </div>
                            <hr />
                            <div className="form-group">
                                {items && items.map(item => (
                                    <div key={item.product} className="row my-5">
                                        <div className="col-4 col-lg-2">
                                            <img src={item.imagen} alt={item.nombre} height="45" width="65" />
                                        </div>

                                        <div className="col-5 col-lg-5">
                                            <Link to={`/producto/${item.product}`}>{item.nombre}</Link>
                                        </div>

                                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                            <p>${item.precio}</p>
                                        </div>

                                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                            <p>{item.cantidad} Unidad(es)</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div class="card-body">
                            <button id="btnAtras" className="btn ml-4" onClick={() => navigate(-1)}>Atrás</button>
                            </div>
                            <hr />
                        </div>
                    </div>
                </Fragment>
            )}

        </Fragment>
  )
}