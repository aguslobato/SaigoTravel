const http = require ('http')
const express = require('express')
const app = express()
const fs = require('fs')
const clase = require("./clase")

const server = app.listen(8000, () => {
    console.log('listening on port 8000')
})
app.get('/products', (req,res) => {
    readListProducts = async () => {
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
    res.send([{"title": "Viaje a Uruguay", "price": 40000, "image":"src/Images/paisajes/uruguay.jpg", "id":1}, {"title": "Viaje a Chile", "price": 46000, "image": "src/Images/paisajes/chile.jpeg", "id":2}, {"title": "Viaje a Argentina", "price": 44000, "image":"src/Images/paisajes/argentina.jpg", "id":3}])
})