
exports.up = function(knex) {
  return knex.schema.createTable('report_problem', (table) => {
      table.increments('report_id'),
      table.string('machine_id',50),
      table.string('member_id',50),
      table.string('report_message', 500),
      table.string('report_date',50)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('report_problem')
};
