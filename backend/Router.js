//IMPORTACIONES
const Router = require("express").Router()
const productsControllers = require("./controllers/productsControllers")
const {productId, readListProducts, addProduct, updateProduct, deleteProductById} = productsControllers

//RUTAS
Router.route('/product/:id')
.get(productId)
.put(updateProduct)
.delete(deleteProductById)

Router.route('/products')
.get(readListProducts)
.post(addProduct)


module.exports = Router