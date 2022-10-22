import React, { Fragment } from 'react'

const EditarProductos = () => {
  return (
    <Fragment>
        <h1> Encabezado de editar Productos</h1>
        <section id="productos" className='container mt-5'>


        <div className='row'>
        <div className='card p-3 rounded'>
            <img className='card-img-top mx-auto col-3' src='./images/3TenisDeCueroTropicalC.jpg' alt="TropicalC"></img>
            <div className='card-body d-flex flex-column'>
                    <h5 id="titulo_producto"><a href='http://localhost:3000'>Tenis de cuero Tropical café</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                            </div>
                        <span id="No_de_opiniones"> 4 reviews</span>
                    </div>
                <p className='card-text'>$269.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalle</a>
            </div>
        </div>
        <div className='form col-3 ml-3r'>
            
        <form action="/action_page.php" className='form-inline justify-center' >
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email"></input>
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>


        </div>
        </div>            

        </section>

    </Fragment>
    
  )
}

export default EditarProductos