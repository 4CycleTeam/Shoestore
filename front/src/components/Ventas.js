import React, {Fragment} from 'react'

export const Ventas = () => {


    return (
        <Fragment>
            <h1 id="encabezado_Ventas">Ventas</h1>

            <section id="ventas" className='container mt-5'>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Id Venta</th>
      <th scope="col">Valor </th>
      <th scope="col">Vendedor</th>
    </tr>
  </thead>
  <tbody>
    <tr>      
      <td>2021-01-01</td>
      <td>3625</td>
      <td>30000</td>
      <td>juan</td>
    </tr>
    <tr>      
      <td>2021-01-01</td>
      <td>9857</td>
      <td>30000</td>
      <td>juan</td>
    </tr>
    <tr>      
      <td>2021-01-01</td>
      <td>9874</td>
      <td>30000</td>
      <td>juan</td>
    </tr>
  </tbody>
</table> 
            </section>

        </Fragment>
    )
}
export default Ventas