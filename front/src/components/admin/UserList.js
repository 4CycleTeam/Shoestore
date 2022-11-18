import React, { Fragment, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, deleteUser, clearErrors } from '../../actions/userActions'
import { DELETE_USER_RESET } from '../../constants/userConstants'

const UserList = () => {
    const navigate=useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, users } = useSelector(state => state.allUsers);
    const { isDeleted } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(allUsers());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Usuario Eliminado correctamente');
            navigate("/userList");
            dispatch({ type: DELETE_USER_RESET })
        }

    }, [dispatch, alert, error, isDeleted])

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
    }

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
                    field: 'telefono',
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
                {
                    label: 'Acciones',
                    field: 'actions',
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
                role: user.role,
                actions: <Fragment>
                <Link to={`/user/${user._id}`} className="btn btn-outline-primary py-1 px-2">
                    <i className="fa fa-eye"></i>
                </Link>
                <Link to={`/admin/user/${user._id}`} className="btn btn-outline-warning py-1 px-2">
                <i class="fa fa-pencil"></i>
                </Link>
                <button  className="btn btn-outline-danger  py-1 px-2" onClick={() => deleteUserHandler(user._id)}>
                    <i className="fa fa-trash"></i>
                </button>
     

            </Fragment>
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
export default UserList