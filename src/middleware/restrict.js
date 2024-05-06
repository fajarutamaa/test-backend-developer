const { ResponseTemplate } = require('../helpers/resp.helper')
const jwt = require('jsonwebtoken')

const sendError = (res, message, status = 401) => {
  const response = ResponseTemplate(null, message, null, status)
  return res.status(status).json(response)
}

async function Authenticate(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) {
    return sendError(res, 'User unauthorized')
  }

  try {
    if (!process.env.JWT_SECRET_KEY) {
      return sendError(res, 'JWT secret key not provided', 500)
    }

    const user = await jwt.verify(
      authorization.split(' ')[1],
      process.env.JWT_SECRET_KEY,
    )
    req.user = user
    next()
  } catch (error) {
    return sendError(res, 'User unauthorized')
  }
}

module.exports = { Authenticate }
