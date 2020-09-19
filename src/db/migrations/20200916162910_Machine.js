
exports.up = function(knex) {
  return knex.schema.createTable('machine', (table) => {
      table.increments('machine_id'),
      table.string('machine_type_id', 50),
      table.string('machine_name', 100)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTablIfExists('machine')
};
