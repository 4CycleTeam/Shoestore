import React, { Fragment, useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import { useParams, Link } from 'react-router-dom'
import Pagination from 'react-js-pagination'


export const ProductsList = () => {
    const params= useParams();
    const keyword= params.keyword;
    const [currentPage, setCurrentPage] = useState(1)
    const { loading, products, error, resPerPage, productsCount } = useSelector(state => state.productos)
    const alert = useAlert();
    
    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts(currentPage, keyword));
    }, [dispatch, alert, error, currentPage, keyword])

    function setCurrentPageNo(pageNumber){
        setCurrentPage(pageNumber)
    }
    


    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'Nombre',
                    field: 'nombre',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'precio',
                    sort: 'asc'
                },
                {
                    label: 'Inventario',
                    field: 'inventario',
                    sort: 'asc'
                },
                {
                    label: 'Vendedor',
                    field: 'vendedor',
                    sort: 'asc'
                },
                {
                    label: 'Acciones',
                    field: 'actions',
                },
            ],
            rows: []
        }

        products.forEach(product => {
            data.rows.push({
                nombre: product.nombre,
                precio: `$${product.precio}`,
                inventario: product.inventario,
                vendedor: product.vendedor,
                actions: <Fragment>
                    <Link to={`/producto/${product._id}`} className="btn btn-outline-primary py-1 px-2">
                        <i className="fa fa-eye"></i>
                    </Link><Link to="/" className="btn btn-outline-warning py-1 px-2">
                    <i class="fa fa-pencil"></i>
                    </Link>

                    <Link to="/" className="btn btn-outline-danger  py-1 px-2">
                        <i className="fa fa-trash"></i>
                    </Link>
                    
                </Fragment>
            })
        })

        return data;
    }

    return (
        <Fragment>
            <MetaData title={'All Products'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <br />
                        <br />
                        <h1 className="my-5 fa fa-list-ul fa-2x"> Productos Registrados</h1>

                        {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                            <MDBDataTable
                                data={setProducts()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    
                    
                    <div className='d-flex justify-content-center mt-5'>
                        <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText={'Siguiente'}
                        prevPageText={'Anterior'}
                        firstPageText={'Primera'}
                        lastPageText={'Ultima'}
                        itemClass='page-item'
                        linkClass='page-link'
                        />
                    </div>


                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}
export default ProductsList
