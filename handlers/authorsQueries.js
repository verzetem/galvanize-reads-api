const knex = require('../db/connection.js')

function getAllAuthors(req, res, next) {
	knex('author')
	.orderBy('id', 'asc')
	.then(response => {
		res.json({ authors: response })
	})
}

function getOneAuthor(req, res, next) {
	const id = req.params.id 
	knex('author')
		.where('id', id)
		.then(author => {
			if (author.length === 0) {
				res.json({ error: 'Not Found', status: 404, url: req.originalUrl })
			} else {
				res.json({ author: author[0] })
			}
		})
}

function postAuthor(req, res, next) {
	const body = req.body
	knex('author')
		.insert(body)
		.then(author => {
			res.json({ author: body })
		})
}

function putAuthor(req, res, next) {
	const body = req.body
	const id = req.params.id
	knex('author')
		.where('id', id)
		.update(body)
		.returning('*')
		.then(updated => {
			res.json({ author: updated })
		})
}

function deleteAuthor(req, res, next) {
	const id = req.params.id
	knex('author')
		.where('id', id)
		.del()
		.returning('*')
		.then(deletedAuthor => {
			res.json({ deleted: deletedAuthor })
		})
}

module.exports = {
  getAllAuthors,
  getOneAuthor,
  postAuthor,
  putAuthor,
  deleteAuthor
}

