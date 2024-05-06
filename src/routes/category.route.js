const router = require('express').Router()
const { checkCategory, checkAdmin } = require('../middleware/middleware')
const { Authenticate } = require('../middleware/restrict')
const {
  CreateCategory,
  ListCategory,
  EditCategory,
} = require('../controllers/category.controller')

router.get('/', Authenticate, checkAdmin, ListCategory)
router.post('/create', Authenticate, checkAdmin, checkCategory, CreateCategory)
router.patch('/edit/:id', Authenticate, checkAdmin, checkCategory, EditCategory)

module.exports = router
