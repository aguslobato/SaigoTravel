 const { send } = require("process")
 const clase = require("./clase")

 let person = new clase("hola")
 person.save("Viaje a Uruguay", 2000, "src/Images/paisajes/uruguay.jpg")
 person.getById(8)
 person.getAll()
 // person.deleteById(1)
 // person.deleteAll()

 console.log(person.product)