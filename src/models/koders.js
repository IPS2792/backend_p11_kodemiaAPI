const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
    name: {
        type:String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    generation:{
        type: Number,
        required: true,
        min: 1
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Una opcion es definir una constante temporal
//const model = mongoose.model('koders', koderSchema)

// module.export -> sirve para decir lo que queremos que el script exporte a otro modulo
// Solo se puede exportar una sola cosa
// Para ahorrarse la funcion, se puede hacer lo siguiente:
module.exports = mongoose.model('koders', koderSchema)

