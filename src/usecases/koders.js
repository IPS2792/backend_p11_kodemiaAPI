const Koder = require('../models/koders.js')

//los casos de uso son las acciones que puede ejercer un usuario en el sistema
async function getAll(){
    const allKoders = await Koder.find()
    return allKoders
}

function create(koderData){
    return Koder.create(koderData)
}

function deleteById(id){
    return Koder.findByIdAndRemove(id)
}

function updateById(id, newKoderData){
    return Koder.findByIdAndUpdate(id, newKoderData)
}

//en la ruta
//const koders = require(' ...koders')
//koders.getAll()

module.exports = {
    getAll, // solo devuelve el valor sin ejecutar la función 
    create, 
    deleteById,
    updateById
}

/*
async function create (koderData){
    const newKoder = new Koder(koderData)
    const koderCreated = await newKoder.save()
    return koderCreated
}
*/
/*
getAll().then(koders => {
    console.log('koders: ', koders)
}).catch(error => console.error('Error: ', error))
*/
