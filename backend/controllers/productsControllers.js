 const listProducts = require('../files/products.json')
 const fs = require('fs')
 const http = require('http')

 const productsControllers = {

     readListProducts: async (req,res) => { //MUESTRA LA LISTA DE PRODUCTOS

         res.json({success:true, listProducts})

    },

     productId: async(req, res)  => { //MUESTRA UN PRODUCTO DEPENDIENDO EL ID QUE PIDA EL CLIENTE

         let filtrado
             try{
                 let files = [...listProducts]
                 filtrado = files.filter(idHijo => idHijo.id.toString() === req.params.id)
                 console.log(filtrado.length > 0 ? filtrado : "not find id")
            }
             catch(error){console.log(error)}
         res.json({success:true , filtrado})

    },

     addProduct: async(req,res) => { //AGREGA UN PRODUCTO AL ARRAY

         const {title,price,image} = req.body
         console.log(req.body)
             try{
                 let products = [...listProducts]
                 const viajes = {
                     title: title,
                     price: price,
                     image : image,
                     id: products.length > 0 ? products.pop().id + 1 : 1
                };
                 let archivo = [...listProducts, viajes]
                 await fs.promises.writeFile('../backend/files/products.json', JSON.stringify(archivo));
                 res.json({success: true, viajes})
            }
         catch(error){console.log(error)}

    },

     updateProduct: async(req,res) => { //ACTUALIZA UN PRODUCTO EN EL ARRAY

         try{
             let product = listProducts.find(product => product.id === +req.params.id)
             if(product){
                 if(req.body.title || req.body.price || req.body.image){
                     product.title= req.body.title ? req.body.title : product.title
                     product.price= req.body.price ? req.body.price : product.price
                     product.image= req.body.image ? req.body.image : product.image
                     await fs.promises.writeFile('../backend/files/products.json', JSON.stringify(listProducts));
                     res.json({success:true, product})
                }
                 else{res.json({success:false, product: "campos indefinidos"})}
            }
             else{res.json({success:false, product: "no existe tu puto producto, vuelvas prontos"})}
        }
         catch(error){console.log(error)}
         
    },

     deleteProductById: async(req,res) => {

         try{
             const products = [...listProducts]
             let filter = products.filter(product => product.id !== req.params.id)
             await fs.promises.writeFile('../backend/files/products.json', JSON.stringify(filter))
             res.json({success:true, products:filter})
        }
         catch(error){console.log(error)}

    }
    
}

module.exports = productsControllers        
      