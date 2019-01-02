const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
let port = process.env.PORT || 3130

const booksRoute = require('./routes/books')
const authorsRoute = require('./routes/authors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
  res.json({
  	"message": "server running"
  })
})

app.use('/books', booksRoute)
app.use('/authors', authorsRoute)

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}

app.listen(port, () => console.log(`Server running on port ${port}.`))
