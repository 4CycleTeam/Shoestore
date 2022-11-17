import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                
                <ul className="list-unstyled components">
                <br />
                <br />

                    <li>
                        <Link to="/Dashboard"><i className="fa fa-cogs"></i> Administración</Link>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-list" ></i> Productos</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/ProductList"><i className="fa fa-clipboard"></i> Todos</Link>
                            </li>

                            <li>
                                <Link to="/crearProducto"><i className="fa fa-plus-circle"></i> Crear</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Pedidos</Link>
                    </li>

                    <li>
                        <Link to="/UsersList"><i className="fa fa-users"></i> Usuarios</Link>
                    </li>

                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Opiniones</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar