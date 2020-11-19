
exports.up = function(knex) {
  return knex.schema.createTable('exercise', (table) => {
      table.increments('exercise_id'),
      table.string('profile_id',50),
      table.string('machine_id',50),
      table.string('date',50)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('exercise')
};
