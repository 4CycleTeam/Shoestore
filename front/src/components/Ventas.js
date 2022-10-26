import React, { Fragment} from 'react'

export const Home = () => {


    return (
        <Fragment>
          

            <section id="productos" className='container mt-5'>
              <br/>
            <h1  width="16" class="fa fa-money fa-2x"> Ventas</h1>
          
     <br/>

<table class="table table-add_review">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha de la Venta</th>
      <th scope="col">Id de la Compra</th>
      <th scope="col">Valor de la Compra</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>18-10-2022</td>
      <td>01</td>
      <td>1500.000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>20-10-2022</td>
      <td>02</td>
      <td>456.000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>21-10-2022</td>
      <td>03</td>
      <td>280.000</td>
    </tr>
  </tbody>
</table> 


            </section>
        </Fragment>
    )
}
export default Home