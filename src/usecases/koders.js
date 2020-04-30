const Koder = require('../models/koders.js')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema
async function getAll () {
  const allKoders = await Koder.find()
  return allKoders
}

function create (koderData) {
  return Koder.create(koderData)
}

function deleteById (id) {
  return Koder.findByIdAndRemove(id)
}

function updateById (id, newKoderData) {
  return Koder.findByIdAndUpdate(id, newKoderData)
}

async function signup (newKoderData) {
  // validar existencia
  const { email, password } = newKoderData
  const koderAlreadyExist = await Koder.findOne({ email })

  if (koderAlreadyExist) throw new Error('This user email already exist')
  if (password.length < 6) throw new Error('Password must have at least 6 characters')
  // crear hash
  const hash = await bcrypt.hash(password, 10)
  return Koder.create({ ...newKoderData, password: hash })
}

async function login (email, password) {
  const koder = await Koder.findOne({ email })
  if (!koder) throw new Error('Invalid data')

  const passwordValid = await bcrypt.compare(password, koder.password)
  if (!passwordValid) throw new Error('Invalid data')

  return jwt.sign({ id: koder._id })
}

// en la ruta
// const koders = require(' ...koders')
// koders.getAll()

module.exports = {
  getAll, // solo devuelve el valor sin ejecutar la función 
  create,
  deleteById,
  updateById,
  signup,
  login
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
