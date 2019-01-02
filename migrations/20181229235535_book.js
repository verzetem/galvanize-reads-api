
exports.up = function(knex, Promise) {
	return knex.schema.createTable('book', function (table) {
	  table.increments()
	  table.string('title')
	  table.string('genre')
	  table.string('description', 4000)
	  table.string('cover_image')
	})

}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
}
