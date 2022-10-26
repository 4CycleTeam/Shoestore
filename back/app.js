const express=require("express");
const app = express();

app.use(express.json());

//Importar rutas
const productos=require("./rutas/rutasProductos")

app.use('/api',productos) // (ruta del navegador)

module.exports=app