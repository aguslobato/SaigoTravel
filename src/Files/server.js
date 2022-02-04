 const express = require('express')
 const app = express()
 const fs = require('fs')

 //CREO EL SERVIDOR EN EL PUERTO 8000
 const server = app.listen(8000, () => {
     console.log('listening on port 8000')
})
 app.get('/products', (req,res) => {
     readListProducts = async () => {
         //ACA HAGO QUE LEA EL JSON DONDE ESTA ALMACENADO EL ARRAY CON SUS OBJETOS
         try{
             let products = await fs.promises.readFile('./products.json', 'utf-8')
             let file = []
             if(products){
                 file = JSON.parse(products)
            }
             console.log(file.length > 0 ? file : "no products in the database")
        }catch(error){
             console.log(error)
        }
    }
    res.send([{"title": "Viaje a Uruguay", "price": 40000, "image":"src/Images/paisajes/uruguay.jpg", "id":1}, {"title": "Viaje a Chile", "price": 46000, "image": "src/Images/paisajes/chile.jpeg", "id":2}, {"title": "Viaje a Argentina", "price": 44000, "image":"src/Images/paisajes/argentina.jpg", "id":3}])//MUESTRO COMO RESPUESTA EL ARRAY CON SUS OBJETOS PARA QUE EL CLIENTE LO VEA
})

 //TRAER UN PRODUCTO RANDOM DEL ARRAY
 app.get('/productRandom', (req,res) => {
     function getProductRandom(datos) {
         if (!Array.isArray(datos)) {
             throw TypeError('El argumento debe ser un arreglo.');
       }
         return datos[Math.floor(Math.random() * datos.length)];
    }
     try {
         for(let i = 1; i <= 1; ++i) {}//ACA DEFINO QUE SOLAMENTE QUIERO UNO
        
    } catch (e) {
         console.log(`Error: ${e.message}`);
    }
     res.send(getProductRandom([{"title": "Viaje a Uruguay", "price": 40000, "image":"src/Images/paisajes/uruguay.jpg", "id":1}, {"title": "Viaje a Chile", "price": 46000, "image": "src/Images/paisajes/chile.jpeg", "id":2}, {"title": "Viaje a Argentina", "price": 44000, "image":"src/Images/paisajes/argentina.jpg", "id":3}]))
     //PASO LOS DATOS DEL ARRAY PARA QUE SAQUE DE AHI UN OBJETO RANDOM Y ME LO MUESTRE COMO RESPUESTA PARA EL CLIENTE
})