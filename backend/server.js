 //IMPORTACIONES
 const express = require('express');
 const app = express();
 const Router = require('./Router')
 const cors = require('cors')

 //CREO EL SERVIDOR EN EL PUERTO 8000
 const server = app.listen(8080, () => {
     console.log('listening on port 8080')
})

 //ROUTES IMPLEMENTACION
 app.use(cors())
 app.use(express.json())
 app.use('/api', Router)
