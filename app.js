const express = require('express')
const path = require('path')
// const router = express.Router()
const app = express()

// set views folder path where pug files are
app.set('views', path.join(__dirname, 'views'))
// set view engine to pug
app.set('view engine', 'pug')
// load static files in public folder
app.use(express.static(path.join(__dirname, 'public')))
// tucked away the routing
require('./routes/_router')(app)

module.exports = app
