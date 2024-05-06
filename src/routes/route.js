const router = require('express').Router()
const morgan = require('morgan')

const authRoute = require('../routes/auth/auth.route')
const productRoute = require('./product.route')
const userRoute = require('./user.route')
const categoryRoute = require('./category.route')
const cityRoute = require('./city.route')
const activationRoute = require('./activation.route')
const {
  ForgotPassword,
  ResetPassword,
} = require('../controllers/auth/auth.controller')
const { FetchData } = require('../controllers/data.controller')

router.use(morgan('combined'))

router.use('/auth', authRoute)
router.use('/activation', activationRoute)
router.post('/forgot-password', ForgotPassword)
router.post('/reset-password', ResetPassword)
router.use('/product', productRoute)
router.use('/data', FetchData)

// admin route
router.use('/admin/users', userRoute)
router.use('/admin/category', categoryRoute)
router.use('/admin/city', cityRoute)

module.exports = router
