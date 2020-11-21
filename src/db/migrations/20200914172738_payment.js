exports.up = function (knex) {
  return knex.schema.createTable("payment", (table) => {
    table.increments("payment_id");
    table.string("profile_id", 50);
    table.string("receipt_path", 1000);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("payment");
};
