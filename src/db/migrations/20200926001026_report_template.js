
exports.up = function(knex) {
  return knex.schema.createTable('report_template', (table) => {
      table.increments('problem_temp_id'),
      table.string('machine_type_id', 50),
      table.string('message', 500)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('report_template')
};
