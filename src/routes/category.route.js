const router = require('express').Router()
const { checkCategory, checkAdmin } = require('../middleware/middleware')
const { Authenticate } = require('../middleware/restrict')
const {
  CreateCategory,
  ListCategory,
} = require('../controllers/category.controller')

router.get('/', Authenticate, checkAdmin, ListCategory)
router.post('/create', Authenticate, checkAdmin, checkCategory, CreateCategory)

module.exports = router
