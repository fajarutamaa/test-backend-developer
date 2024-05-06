const router = require('express').Router()
const { checkProduct } = require('../middleware/middleware')
const {
  CreateProduct,
  ListProduct,
  EditProduct,
  DeleteProduct,
} = require('../controllers/product.controller')
const { Authenticate } = require('../middleware/restrict')

router.get('/', Authenticate, ListProduct)
router.post('/create', Authenticate, checkProduct, CreateProduct)
router.patch('/edit/:id', Authenticate, checkProduct, EditProduct)
router.delete('/:id', Authenticate, DeleteProduct)

module.exports = router
