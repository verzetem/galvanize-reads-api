const express = require('express')
const router = express.Router()

// sample data
// const bookData = require('../sampledata.json')

const knex = require('../db/connection.js')
const authorsQueries = require('../handlers/authorsQueries')

router.get('/', authorsQueries.getAllAuthors)

router.get('/:id', authorsQueries.getOneAuthor)

router.post('/', authorsQueries.postAuthor)

router.put('/:id', authorsQueries.putAuthor)

router.delete('/:id', authorsQueries.deleteAuthor)


module.exports = router