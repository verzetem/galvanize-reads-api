const express = require('express')
const router = express.Router()

// sample data
// const bookData = require('../sampledata.json')

const knex = require('../db/connection.js')
const booksQueries = require('../handlers/booksQueries')

router.get('/', booksQueries.getAllBooks)

router.get('/:id', booksQueries.getOneBook)

router.post('/', booksQueries.postBook)

router.put('/:id', booksQueries.putBook)

router.delete('/:id', booksQueries.deleteBook)

module.exports = router