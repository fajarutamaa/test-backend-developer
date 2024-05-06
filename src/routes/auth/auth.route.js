const router = require('express').Router()
const { Login, Logout } = require('../../controllers/auth/auth.controller')
const { Authenticate } = require('../../middleware/restrict')

router.post('/login', Login)
router.post('/logout', Authenticate, Logout)

module.exports = router
