const router = require('express').Router()
const { checkRegister } = require('../../middleware/middleware')
const {
  Register,
  Login,
  Logout,
} = require('../../controllers/auth/auth.controller')

router.post('/register', checkRegister, Register)
router.post('/login', Login)
router.post('/logout', Logout)

module.exports = router
