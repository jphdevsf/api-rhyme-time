const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const { check, validationResult } = require('express-validator')
// const { sanitizeBody } = require('express-validator/filter')

const myRoutes = (app) => {
  // for parsing application/json
  app.use(bodyParser.json())
  // for parsing application/xwww-
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/', (req, res) => {
    res.render('index', {
      title: 'Rhyme Time',
      data: {},
      errors: {}
    })
  })

  app.post('/', [
    check('rhymeText')
      .matches(/^[a-zA-Z]+$/).withMessage('Only letters are allowed.')
      .isLength({ min: 1, max: 15 }).withMessage('Please enter between 1 and 15 letters.')
  ], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.render('index', { title: 'Error | Rhyme Time', errorsArray: errors.array() })
    }
    // if above passes, go get the rhymes!
    const formData = req.body
    console.log(formData)
    //! maxResults selection from form is not working. Use Multer for multi line form data?
    const maxResults = formData.maxResults ? formData.maxResults : 200
    const reqUrl = `https://rhymebrain.com/talk?function=getRhymes&word=${formData.rhymeText}&maxResults=${maxResults}`

    fetch(reqUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((myData) => {
        // res.send(data)
        res.render('index', { title: 'Results | Rhyme Time', wordSearched: formData.rhymeText, resultsArray: myData })
      })
      .catch((error) => {
        console.error('Oops, Fetch Operation Error:', error)
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
