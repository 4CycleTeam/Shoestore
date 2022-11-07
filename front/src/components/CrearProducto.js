import React, { Fragment } from "react";
import MetaData from "../components/layout/MetaData";
import Sidebar from "./admin/Sidebar";
import { MDBBtn } from "mdb-react-ui-kit";

const CrearProducto = () => {
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
                className="shadow-lg"
                encType="multipart/form-data"
                aling="left"
              >
                <h1 class="fa fa-outdent fa-2x"> Crear Productos</h1>

                <div className="formulario">
                  <br />
                  <input placeholder="ID" disabled></input>
                  &nbsp; &nbsp;
                  <input placeholder="1" number></input>
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="name_field">Nombre del producto:</label>
                  <input type="text" id="name_field" className="form-control" />
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="category_field">Talla:</label>
                  <select className="form-control" id="talla">
                    <option value="" disabled selected>
                      -- Selecione Talla --
                    </option>
                    <option value="1">34</option>
                    <option value="2">35</option>
                    <option value="3">36</option>
                    <option value="4">37</option>
                    <option value="5">38</option>
                    <option value="6">39</option>
                    <option value="7">40</option>
                    <option value="8">41</option>
                    <option value="9">42</option>
                    <option value="10">43</option>
                  </select>
                  <div class="invalid-feedback">Este campo es requerido</div>
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="price_field">Precio:</label>
                  <input type="text" id="precio" className="form-control" />
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="description_field">Descripción:</label>
                  <textarea
                    className="form-control"
                    id="description_field"
                    rows="8"
                  ></textarea>
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="category_field">Categoria:</label>
                  <select className="form-control" id="talla">
                    <option value="" disabled selected>
                      -- Selecione una Categoria --
                    </option>
                    <option value="1">Calzado Mujer</option>
                    <option value="2">Calzado Hombre</option>
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
                  />
                </div>

                <div className="formulario">
                  <br />
                  <label htmlFor="seller_field">Vendedor:</label>
                  <input
                    type="text"
                    id="seller_field"
                    className="form-control"
                  />
                </div>

                <div className="formulario">
                <br />
                  <label>Fecha de Creación: </label>
                  <input
                    type="date"
                    class="form-control"
                    id="fechacreacion"
                    required="required"
                  ></input>
                </div>

                <div className="formulario">
                  <br />
                  <label>Imagen:</label>
                  &nbsp; &nbsp;
                  <input type="file" name="file" id="file" />
                </div>

                <div>
                  <MDBBtn
                    className="btn btn-dark btn-rounded btn-lg border border-dark"
                    id="view_btn"
                  >
                    CREAR
                  </MDBBtn>
                </div>
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default CrearProducto;
