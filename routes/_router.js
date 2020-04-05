const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const myRoutes = (app) => {
  // for parsing application/json
  app.use(bodyParser.json())
  // for parsing application/xwww-
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/', (req, res) => {
    res.render('index', { title: 'Rhyme Time' })
  })
  app.post('/', (req, res) => {
    const formData = req.body
    //! maxResults selection from form is not working. Use Multer for multi line form data?
    const maxResults = formData.maxResults ? formData.maxResults : 50
    const reqUrl = `https://rhymebrain.com/talk?function=getRhymes&word=${formData.text}&maxResults=${maxResults}`
    fetch(reqUrl)
      .then((response) => {
        console.log(response.status)
        return response.json()
      })
      .then((myData) => {
        // res.send(data)
        res.render('index', { title: 'Results | Rhyme Time', wordSearched: formData.text, resultsArray: myData })
      })
  })
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
