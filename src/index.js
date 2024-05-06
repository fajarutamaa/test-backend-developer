require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes/route')
const cookieparser = require('cookie-parser')
const cors = require('cors')

const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieparser())
app.use('/api/v1/', router)

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`)
})
