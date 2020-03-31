var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/about', function (req, res, next) {
  // render pug file
  res.render('about', { title: 'Rhyme Time | About Me' })
})

module.exports = router
