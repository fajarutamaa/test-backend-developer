const router = require('express').Router()
const { checkCity, checkAdmin } = require('../middleware/middleware')
const { ListCity, CreateCity } = require('../controllers/city.controller')
const { Authenticate } = require('../middleware/restrict')

router.get('/', Authenticate, checkAdmin, ListCity)
router.post('/create', Authenticate, checkAdmin, checkCity, CreateCity)

module.exports = router
