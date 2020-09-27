exports.up = function (knex) {
  return knex.schema.createTable("machine_group", (table) => {
    table.increments("machine_group_id"),
      table.string("machine_group_name", 100);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("machine_group");
};
