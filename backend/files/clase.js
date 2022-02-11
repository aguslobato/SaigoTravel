//   const fs = require('fs')
//   const express = require('express')
//   const http = require ('http')

//   class Contenedor{
//       constructor(archivo){
//           this.product = [{title:archivo.title,price:archivo.price,thumbnail:archivo.thumbnail}]
//      }

//        async save (title,price,thumbnail){
//            this.product = {title:title,price:price,thumbnail:thumbnail}
//            try{
//                let products = await fs.promises.readFile('../files/products.json', 'utf-8')
//                let file = [] 
//                if(products){
//                    file = JSON.parse(products)
//               }
//                let files = [...file]
//                const viajes = {
//                    title: title,
//                    price: price,
//                    thumbnail : thumbnail,
//                    id: files.length > 0 ? files.pop().id + 1 : 1
//               };
//                let archivo = [...file, viajes]
//                console.log("id:",viajes.id, "file uploaded successfully")
//                await fs.promises.writeFile('../files/products.json', JSON.stringify(archivo));
//           }catch(error){
//                console.log(error)
//           }
//       }
//       async getById(id){
//           try{
//               let products = await fs.promises.readFile('../files/products.json', 'utf-8')
//               let file = [] 
//               if(products){
//                   file = JSON.parse(products) 
//              }
//               let files = [...file]
//               let filtrado = files.filter(idHijo => idHijo.id === id)
//               console.log(filtrado.length > 0 ? filtrado : "not find id")
//          }catch(error){
//               console.log(error)
//          }
//      }
//       async getAll(){
//           try{
//               let products = await fs.promises.readFile('../files/products.json', 'utf-8')
//               let file = [] 
//               if(products){
//                   file = JSON.parse(products) 
//              }  
//               console.log(file.length > 0 ? file : "no products in the database")
//          }catch(error){
//               console.log(error)
//          }
//      }
//       async deleteById(id){
//           try{
//               let products = await fs.promises.readFile('../files/products.json', 'utf-8')
//               let file = []
//               if(products){
//                   file = JSON.parse(products) 
//              }
//               let files = [...file]
//               let filtrado = files.filter(idHijo => idHijo.id !== id)
//               if(files.some(idHijo => idHijo.id === id)){
//                   console.log(`the product id: ${id} remove to the array list`)
//                   await fs.promises.writeFile('../files/products.json', JSON.stringify(filtrado))
//              }else{
//                   console.log("the product does not exist with this id:", id)
//              }
//          }catch(error){
//               console.log(error)
//          }
//      }
//       async deleteAll(){
//           try{
//               await fs.promises.writeFile('../files/products.json', JSON.stringify([]))
//          }catch(error){
//               console.log(error)
//          }
//      }
//  }
//   module.exports = Contenedor