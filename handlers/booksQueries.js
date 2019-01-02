const knex = require('../db/connection.js')

function getAllBooks(req, res, next) {
	knex('book')
	.orderBy('id', 'asc')
	.then(response => {
		res.json({ books: response })
	})
}

function getOneBook(req, res, next) {
	const id = req.params.id 
	knex('book')
		.where('id', id)
		.then(book => {
			if (book.length === 0) {
				res.json({ error: 'Not Found', status: 404, url: req.originalUrl })
			} else {
				res.json({ book: book[0] })
			}
		})
}

function postBook(req, res, next) {
	const body = req.body
	knex('book')
		.insert(body)
		.then(book => {
			res.json({ book: body })
		})
}

function putBook(req, res, next) {
	const body = req.body
	const id = req.params.id
	knex('book')
		.where('id', id)
		.update(body)
		.returning('*')
		.then(updated => {
			res.json({ book: updated })
		})
}

function deleteBook(req, res, next) {
	const id = req.params.id
	knex('book')
		.where('id', id)
		.del()
		.returning('*')
		.then(deletedBook => {
			res.json({ deleted: deletedBook })
		})
}




module.exports = {
  getAllBooks,
  getOneBook,
  postBook,
  putBook,
  deleteBook
}

