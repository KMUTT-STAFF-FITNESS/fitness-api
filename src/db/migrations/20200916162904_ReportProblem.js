exports.up = function (knex) {
  return knex.schema.createTable("report_problem", (table) => {
    table.increments("report_id"),
      table.string("machine_id", 50),
      table.string("report_message", 500),
      table.timestamp("report_date").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("report_problem");
};
