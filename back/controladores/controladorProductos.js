const producto=require("../modelos/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); 

//Ver la lista de productos
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//Ver producto por ID
exports.getProductById= async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    
    if (!product){
            return res.status(404).json({
            success:false,
            message: 'No se encuentra el producto solicitado'
        })
    }
    res.status(200).json({
        success:true,
        message:"Debajo encuentra información sobre su producto: ",
        product
    })
}

//Actualizar producto
exports.updateProduct= async (req,res,next) =>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //Verificacion de la existencia del producto
            return res.status(404).json({
            success:false,
            message: 'No se encuentra el producto'
        })
    }
    //Se ejecuta actualización si existe el producto
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
}


//Eliminar un producto
exports.deleteProduct= async (req,res,next) =>{
    const product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //Verificacion de la existencia del producto
            return res.status(404).json({ //Si el producto no existe se ternima el proceso de eliminación
            success:false,
            message: 'No se encuentra el producto'
        })
    }

    await product.remove();//Eliminacion del producto
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
}
// FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductoPorID('63456a8d9163cb9dbbcaa235'); Probamos el metodo con un id