var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  // render pug file
  res.render('index', { title: 'Rhyme Time' })
  next()
})

module.exports = router
