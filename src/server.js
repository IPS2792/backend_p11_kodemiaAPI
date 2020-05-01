const express = require('express')

// const koders = require ('./usecases/koders')
const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')
// const auth = require('./middlewares/auth')
const app = express()

// middleware global (aplica a toda la app)
app.use(express.json())
app.use((request, response, next) => {
  console.log(`>${request.method} ${request.url}`)
  next()
})
// app.use(auth)

// Sirve para montar un router y otros middlewares
app.use('/auth', authRouter)
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)

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
// Varios tipos de peticiones al mismo recurso
// el router enmascara en / la ruta /koders

module.exports = app
