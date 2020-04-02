const reqIndex = require('./index')
const reqAbout = require('./about')

// router/router.js
const myRoutes = (app) => {
  app.use('/', reqIndex)
  app.use('/about', reqAbout)
  app.use((req, res) => {
    res.status(400)
    res.render('404.pug', { title: '404: File Not Found' })
  })
  app.use((error, req, res, next) => {
    res.status(500)
    res.render('500.pug', { title: '500: Internal Server Error', error: error })
  })
}

module.exports = myRoutes
