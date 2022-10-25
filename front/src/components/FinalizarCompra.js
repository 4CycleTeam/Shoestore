import React, { Fragment} from 'react'
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem} from 'mdb-react-ui-kit';


export const Home = () => {


    return (
        <Fragment>
           

            <section id="productos" className='container mt-5'>

        <h1  width="16"  class=""> Finalizar Compra</h1>

        <MDBTable align='middle' small >
        <MDBTableHead>
        <tr>
        <td colSpan={7} class=".float-.float-left">Datos del cliente</td>
        </tr>
            <tr>
            <th scope='col'>Ítem</th>
            <th scope='col'>Cantidad</th>
            <th scope='col'>Producto</th>
            <th scope='col'>Detalle del producto</th>
            <th scope='col'>Valor </th>
            <th scope='col'>Total</th>
            <th scope='col'>Actions</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
        <tr>
            <td>1</td>
            <td>
                <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='btn'>
                        1
                            </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>1</MDBDropdownItem>
                                    <MDBDropdownItem link>2</MDBDropdownItem>
                                    <MDBDropdownItem link>3</MDBDropdownItem>
                            </MDBDropdownMenu>
                </MDBDropdown></td>
            <td>
                <div className='d-flex align-items-center'>
                <img
                    src='./images/9TenisdecueroAlmendro.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                />
                
                </div>
            </td>
            <td>
                <p className='fw-normal mb-1'>Tenis de cuero Almendro</p>
                <p className='text-muted mb-0'>Color Almendro</p>
                <p className='text-muted mb-0'>Talla 34</p>
                <p></p>
                <MDBBtn outline>Eliminar producto</MDBBtn>
            </td>
            <td>
            <p className='text-muted mb-0'> $ 343.585</p>
            </td>
            <p className='text-muted mb-0'> $ 343.585</p>
            <td>
            <MDBBtn  outline color='link' rounded size='sm'>
                Eliminar producto
                </MDBBtn>
            </td>
        </tr>
            
        </MDBTableBody>
        <tfoot>
        <tr>
        <td colSpan={5} class=".float-.float-left">Subtotal</td>

          <td>Footer</td>
        </tr>
        <tr>
        <td colSpan={5} class=".float-.float-left">Total</td>
        <td>Footer</td>
        </tr>
      </tfoot>
        </MDBTable>
  
        </section>
           
        </Fragment>
    )
}
export default Home