import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../actions/productActions'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'
import { useNavigate } from 'react-router-dom'
import { MDBBtn } from "mdb-react-ui-kit";


const NewProduct = () => {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('');
  const [talla, setTalla] = useState('');
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [inventario, setInventario] = useState(0);
  const [vendedor, setVendedor] = useState('');
  const [imagen, setImagen] = useState([]);
  const [imagenPreview, setImagenPreview] = useState([])

  const categorias = [
    "-- Selecione la categoria --", 
    "Calzado Mujer",
    "Calzado Hombre"
  ]

  const tallas = [
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42"
  ]

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(state => state.newProduct);

  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

    if (success) {
      navigate('/ProductList');
      alert.success('Product created successfully');
      dispatch({ type: NEW_PRODUCT_RESET })
    }

  }, [dispatch, alert, error, success])

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('nombre', nombre);
    formData.set('talla', talla);
    formData.set('precio', precio);
    formData.set('descripcion', descripcion);
    formData.set('categoria', categoria);
    formData.set('inventario', inventario);
    formData.set('vendedor', vendedor);

    imagen.forEach(img => {
      formData.append('imagen', img)
    })

    dispatch(newProduct(formData))
  }

  const onChange = e => {

    const files = Array.from(e.target.files)

    setImagenPreview([]);
    setImagen([])

    files.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagenPreview(oldArray => [...oldArray, reader.result])
          setImagen(oldArray => [...oldArray, reader.result])
        }
      }

      reader.readAsDataURL(file)
    })
  }


  return (
    <Fragment>
      <MetaData title={"Nuevo Producto"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div className="wrapper my-5">
              <form
                className="shadow-lg" onSubmit={submitHandler}
                encType="multipart/form-data" aling="left">

                <h1 class="fa fa-outdent fa-2x"> Crear Producto</h1>

            
                <div className="formulario">
                  <br />
                  <label htmlFor="name_field">Nombre del producto:</label>
                  <input type="text" id="name_field" className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="category_field">Talla:</label>
                  <select className="form-control"
                    id="category_field"
                    value={talla} onChange={(e) => setTalla(e.target.value)}>
                    {tallas.map(talla => (
                      <option key={talla} value={talla} >{talla}</option>
                    ))}
                  </select>
                  <div class="invalid-feedback">Este campo es requerido</div>
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="price_field">Precio:</label>
                  <input type="text" id="precio" className="form-control"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="description_field">Descripción:</label>
                  <textarea
                    className="form-control"
                    id="description_field"
                    rows="8"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}></textarea>
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="category_field">Categoria:</label>
                  <select className="form-control"
                    id="category_field"
                    value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    {categorias.map(categoria => (
                      <option key={categoria} value={categoria} >{categoria}</option>
                    ))}
                  </select>
                  <div class="invalid-feedback">Este campo es requerido</div>
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="stock_field">Inventario:</label>
                  <input
                    type="number"
                    id="stock_field"
                    className="form-control"
                    value={inventario}
                    onChange={(e) => setInventario(e.target.value)}
                  />
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="seller_field">Vendedor:</label>
                  <input
                    type="text"
                    id="seller_field"
                    className="form-control"
                    value={vendedor}
                    onChange={(e) => setVendedor(e.target.value)}
                  />
                </div>

                {/*    <div className="formulario">
                  <br />
                  <label>Fecha de Creación: </label>
                  <input
                    type="date"
                    class="form-control"
                    id="fechacreacion"
                    required="required"
                  ></input>
                </div>
              */}

                <div className="formulario">

                  <label>Imágenes</label>

                  <div className='custom-file'>
                    <input
                      type='file'
                      name='product_images'
                      className='custom-file-input'
                      id='customFile'
                      onChange={onChange}
                      multiple
                    />
                    <label className='custom-file-label' htmlFor='customFile'>
                      Seleccione Imágenes
                    </label>
                  </div>

                  {imagenPreview.map(img => (
                    <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                  ))}

                </div>

                <MDBBtn
                  type="submit"
                  className="btn btn-dark btn-rounded btn-lg border border-dark"
                  id="view_btn"
                  disabled={loading ? true : false}
                >
                  CREAR
                </MDBBtn>
            
          </form>
        </div>
    </Fragment>
        </div >
      </div >
    </Fragment >
  );
};
export default NewProduct


