const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/controladorProductos") //Respuesta json desde el controlador

router.route('/productos').get(getProducts)  //Ruta ver productos
router.route('/producto/nuevo').post(newProduct); //Ruta crear producto
router.route('/producto/:id').get(getProductById); //Ruta consulta por id
router.route('/producto/:id').put(updateProduct);//Ruta Actualización
router.route('/producto/:id').delete(deleteProduct); //Ruta eliminación

module.exports=router;