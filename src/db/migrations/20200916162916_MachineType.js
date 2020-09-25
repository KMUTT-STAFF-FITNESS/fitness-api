
exports.up = function(knex) {
  return knex.schema.createTable('machine_type', (table) => {
      table.increments('machine_type_id'),
      table.string('machine_type_name', 100)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('machine_type')
};
