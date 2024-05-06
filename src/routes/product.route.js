const router = require('express').Router()
const { checkProduct } = require('../middleware/middleware')
const {
  CreateProduct,
  ListProduct,
} = require('../controllers/product.controller')
const { Authenticate } = require('../middleware/restrict')

router.get('/', Authenticate, ListProduct)
router.post('/create', Authenticate, checkProduct, CreateProduct)

module.exports = router
