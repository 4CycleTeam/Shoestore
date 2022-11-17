import React, { Fragment, useEffect } from 'react'
//import { Link } from "react-router-dom"
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors,  getAdminUsers } from '../../actions/userActions'

export const UsersList = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, users } = useSelector(state => state.users);
    /*
    const deleteProductHandler= (id)=> {
        const response=window.confirm("Esta seguro de querer borrar este usuario?")
        if (response){
            dispatch(deleteProduct(id))
            alert.success("Producto eliminado correctamente")
            window.location.reload(false)
        }
    }
    */
    useEffect(() => {
        dispatch(getAdminUsers());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error])

    const setUsers = () => {
        const data = {
            columns: [
                {
                    label: 'Nombre',
                    field: 'nombre',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Teléfono',
                    field: 'teléfono',
                    sort: 'asc'
                },
                {
                    label: 'Dirección',
                    field: 'direccion',
                    sort: 'asc'
                },
                {
                    label: 'Rol',
                    field: 'role',
                },
            ],
            rows: []
        }

        users.forEach(user => {
            data.rows.push({
                nombre: user.nombre,
                email: user.email,
                telefono: user.telefono,
                direccion: user.direccion,
                role: user.role
            })
        })

        return data;
    }

    return (
        <Fragment>
            <MetaData title={'Lista de usuarios'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                    <br />
                        <br />
                        <h1 className="my-5 fa fa-list-ul fa-2x"> Usuarios Registrados</h1>

                        {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                            <MDBDataTable
                                data={setUsers()}
                                className="px-3 text-center"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}
export default UsersList