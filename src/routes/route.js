const router = require('express').Router()
const morgan = require('morgan')

const { checkRegister } = require('../middleware/middleware')
const authRoute = require('../routes/auth/auth.route')
const productRoute = require('./product.route')
const adminRoute = require('./admin.route')
const categoryRoute = require('./category.route')
const cityRoute = require('./city.route')
const activationRoute = require('./activation.route')
const { Authenticate } = require('../middleware/restrict')
const {
  ForgotPassword,
  ResetPassword,
} = require('../controllers/auth/auth.controller')
const { FetchData } = require('../controllers/data.controller')
const { Register } = require('../controllers/auth/auth.controller')

router.use(morgan('combined'))

router.use('/auth', authRoute)
router.use('/activation', activationRoute)
router.post('/register', checkRegister, Register)
router.post('/forgot-password', Authenticate, ForgotPassword)
router.post('/reset-password', ResetPassword)
router.use('/product', productRoute)
router.use('/vehicles/data', FetchData)

// admin route
router.use('/admin/users', adminRoute)
router.use('/admin/category', categoryRoute)
router.use('/admin/city', cityRoute)

module.exports = router
