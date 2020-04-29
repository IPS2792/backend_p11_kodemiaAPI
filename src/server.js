const express = require('express')
//const koders = require ('./usecases/koders')
const kodersRouter = require('./routes/koders')
const app = express()

// Sirve para montar un router y otros middlewares
app.use(express.json())
app.use('/koders', kodersRouter)

// Todos los recursos mencionados en las rutas se definen en plural
/*
app.get('/koders', async (request, response) => {
    const allKoders = await koders.getAll()
    response.json({
        message: 'All Koders',
        data:{
            koders: allKoders
        }
    })
})
*/

// router 'koders'
// Esto permite a /koders recibir peticiones de GET, POST, PUT, PATCH, etc.
//Varios tipos de peticiones al mismo recurso
//el router enmascara en / la ruta /koders

module.exports = app
