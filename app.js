var express = require('express')
var path = require('path')
// var cookieParser = require('cookie-parser')
var indexRouter = require('./routes/index')
var aboutRouter = require('./routes/about')

// const apiHelper = require('./apiHelper')

var app = express()

// setup pug views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// parsing setup
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

// router section
app.get('/', indexRouter)
app.get('/about', aboutRouter)

// app.get('/', function (req, res) {
//   apiHelper.make_API_call('https://rhymebrain.com/talk?function=getRhymes&word=house')
//     .then(response => {
//       res.json(response)
//     })
//     .catch(error => {
//       res.send(error)
//     })
// })

module.exports = app
