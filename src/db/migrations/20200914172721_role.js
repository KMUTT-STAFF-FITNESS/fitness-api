exports.up = function(knex) {
    return knex.schema.createTable('role', (table) => {
        table.increments('role_id')
        table.string('role',50)
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('role')
  };