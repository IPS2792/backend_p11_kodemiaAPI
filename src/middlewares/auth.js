const jwt = require('../lib/jwt')

function auth (request, response, next) {
  console.log('Auth middleware')
  const { authorization: token } = request.headers
  console.log('Token: ', token)
  try {
    const decodedToken = jwt.verify(token)
    console.log('decodedToken: ', decodedToken)
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Unauthorized'
    })
  }
}

module.exports = auth
