const router = require('express').Router()
const {
  ListUsers,
  DeleteUser,
  EditUser,
} = require('../controllers/admin.controller')
const { checkAdmin } = require('../middleware/middleware')
const { Authenticate } = require('../middleware/restrict')

router.get('/', Authenticate, checkAdmin, ListUsers)
router.delete('/:id', Authenticate, checkAdmin, DeleteUser)
router.patch('/edit/:id', Authenticate, checkAdmin, EditUser)

module.exports = router
