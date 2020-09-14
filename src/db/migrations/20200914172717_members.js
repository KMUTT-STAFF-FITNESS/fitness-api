exports.up = function(knex) {
    return knex.schema.createTable('members', (table) => {
        table.increments('member_id')
        table.string('username',50)
        table.string('password',50)
        table.string('role_id',50)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('members')
};