const { ResponseTemplate } = require('../helpers/resp.helper')
const Joi = require('joi')

function checkRegister(req, res, next) {
  const schema = Joi.object({
    username: Joi.string()
      .max(18)
      .pattern(/^[a-z]+/)
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9!@#$%^&*()]{8,30}$/)
      .required(),
  })

  const { error } = schema.validate(req.body)

  if (error) {
    let response = ResponseTemplate(
      null,
      'Invalid request',
      error.details[0].message,
      400,
    )
    return res.status(400).json(response)
  }
  next()
}

function checkProduct(req, res, next) {
  const schema = Joi.object({
    nama_produk: Joi.string().max(110).required(),
  })

  const { error } = schema.validate(req.body)

  if (error) {
    let response = ResponseTemplate(
      null,
      'Invalid request',
      error.details[0].message,
      400,
    )
    return res.status(400).json(response)
  }
  next()
}

function checkCategory(req, res, next) {
  const schema = Joi.object({
    nama_kategori: Joi.string().max(110).required(),
  })

  const { error } = schema.validate(req.body)

  if (error) {
    let response = ResponseTemplate(
      null,
      'Invalid request',
      error.details[0].message,
      400,
    )
    return res.status(400).json(response)
  }
  next()
}

function checkCity(req, res, next) {
  const schema = Joi.object({
    nama_kota: Joi.string().max(110).required(),
  })

  const { error } = schema.validate(req.body)

  if (error) {
    let response = ResponseTemplate(
      null,
      'Invalid request',
      error.details[0].message,
      400,
    )
    return res.status(400).json(response)
  }
  next()
}

function checkAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'ADMIN') {
    let response = ResponseTemplate(
      null,
      'Unauthorized',
      'Only admin can perform this action',
      403,
    )
    return res.status(403).json(response)
  }

  next()
}

module.exports = {
  checkRegister,
  checkProduct,
  checkCategory,
  checkCity,
  checkAdmin,
}
